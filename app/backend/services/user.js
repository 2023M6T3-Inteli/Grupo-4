const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { v4: uuid } = require('uuid')
require('dotenv').config()
const log4js = require('log4js');

const loggerUser = log4js.getLogger('user');

const prisma = new PrismaClient()

class User {
    async Create(email, pass, name, area, tags) {

        tags = JSON.parse(tags)

        //Verify if user already exists
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            loggerUser.warn(`User ${userAlreadyExists.id} already exists, and tried to create another one`)
            throw new Error('User already exists') 
        }

        //Verificação de senha != "", e HASH da mesma
        if(pass) {
            const hashedPassWord = await bcrypt.hash(pass, 8) 

            pass = hashedPassWord
        }

        let userOut;

        try {
            const user = await prisma.user.create({
                data: {
                    id: uuid(),
                    email: email,
                    password: pass,
                    name: name,
                    area: area,
                }
            })
            userOut = user
            loggerUser.info(`User ${user.id} created successfully`)
        } catch (error) {
            loggerUser.error(`Problems on server: ${error}`)
            throw new Error('Error creating user')
        }

        //Create Tags
        try {
            tags.map(async (tag) => {
                await prisma.tag.create({
                    data: {
                        id: uuid(),
                        name: tag,
                        userId: userOut.id,
                    }
                })
            })

            loggerUser.info(`Tags created successfully for user ${userOut.id}`)
        } catch(err) {
            await prisma.user.delete({
                where: {
                    id: userOut.id
                }
            })
            loggerUser.info(`User ${userOut.id} deleted successfully - CAUSE: Problems on creating tags`)
            throw new Error('Error creating tags')
        }

        return userOut
    }

    async Authenticate(email, pass) {
        //verify if user exists
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        console.log(user)

        if (!user) {
            loggerUser.warn(`Login with email ${email} tried to authnticate`)
            throw new Error('Invalid Email or/and Password')
        }

        //verify if password is correct
        const passMatch = await bcrypt.compare(pass, user.password)

        if (!passMatch) {
            loggerUser.warn(`Account ${user.id} had problems to authenticate with wrong password`)
            throw new Error('Invalid Email or/and Password')
        }

        //generate token
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_USER_AUTH, {
            expiresIn: '1h'
        })

        const refresh_token = jwt.sign({ id: user.id }, process.env.TOKEN_USER_REFRESH, {
            expiresIn: '10m'
        })


        const test = loggerUser.info(`User ${user.id} authenticated successfully`)

        console.log(test)

        return {
            message: "User authenticated",
            access_token: token,
            refresh_token: refresh_token,
            id: user.id,
        }
    }

    async update(id, data) {
        //Verify if user exists
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if (!user) {
            loggerUser.warn(`User ${id} not found on update route, and need to be checked`)
            throw new Error('User not found')
        }

        if(!data) {
            loggerUser.error(`User ${user.id} tried to update without data`)
            throw new Error('No data to update')
        }

        if(data.password) {
            loggerUser.error(`User ${user.id} tried to update password without old password`)
            if (!data.oldPassword) {
                throw new Error('You need to send your old password to update')
            } 

            const passwordMatch = await bcrypt.compare(data.oldPassword, user.password)

            if(!passwordMatch) {
                logger.error(`User ${user.id} tried to update password with wrong old password`)
                throw new Error('Invalid password, so we cant update')
            }

            const hashedPassWord = await bcrypt.hash(data.password, 8) 

            data.password = hashedPassWord
        }

        delete data.oldPassword

        try {
            const user = await prisma.user.update({
                where: {
                    id: id
                },
                data,
            })

            loggerUser.info(`User ${user.id} updated successfully`)
            return user
        } catch (error) {
            logger.error(`Problems on server: ${error}`)
            throw new Error('Error updating user')
        }

    }

    async delete(id) {
        //Verify if user exists
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if (!user) {
            loggerUser.warn(`User ${id} not found on delete route, and need to be checked`)
            throw new Error('User not found')
        }

        try {
            const user = await prisma.user.delete({
                where: {
                    id: id
                }
            })

            loggerUser.info(`User ${user.id} deleted successfully`)
            return "User deleted with success"
        } catch (error) {
            loggerUser.error(`Problems on server: ${error}`)
            throw new Error('Error deleting user')
        }
    }

    async getUser(id) {
        //Verify if user exists
        const user = await prisma.user.findUnique({
            where: {
                id: id
            },
            include: {
                projects: true,
                contents: {
                    include: {
                        tags: true,
                    }
                },
                tags: true,
                applies: {
                    include: {
                        project: true,
                    }
                },
            }
        })

        if (!user) {
            loggerUser.warn(`User ${id} not found on getUser route, and need to be checked`)
            throw new Error('User not found')
        }

        return user
    }

    async getAllUsers() {
        const users = await prisma.user.findMany({
            include: {
                projects: true,
                contents: true,
                tags: true,
            }
        })

        return users
    }
    
}

module.exports = {
    User,
}