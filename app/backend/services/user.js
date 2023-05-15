const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { v4: uuid } = require('uuid')
require('dotenv').config()


const prisma = new PrismaClient()
class User {
    async Create(email, pass, name, area, tags) {
        //Verify if user already exists
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (user) {
            throw new Error('User already exists')
        }

        //Verificação de senha != "", e HASH da mesma
        if(pass) {
            const hashedPassWord = await bcrypt.hash(pass, 8) 

            pass = hashedPassWord
        }

        try {
            const user = await prisma.user.create({
                data: {
                    id: uuid(),
                    email: email,
                    password: pass,
                    name: name,
                    area: area,
                    tags: tags
                }
            })

            return user
        } catch (error) {
            throw new Error('Error creating user')
        }
    }

    async Authenticate(email, pass) {
        //verify if user exists
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error('Invalid Email or/and Password')
        }

        //verify if password is correct
        const passMatch = await bcrypt.compare(pass, user.password)

        if (!passMatch) {
            throw new Error('Invalid Email or/and Password')
        }

        //generate token
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_USER_AUTH, {
            expiresIn: '1h'
        })

        const refresh_token = jwt.sign({ id: user.id }, process.env.TOKEN_USER_REFRESH, {
            expiresIn: '10m'
        })

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
            throw new Error('User not found')
        }

        if(!data) {
            throw new Error('No data to update')
        }

        if(data.password) {
            if (!data.oldPassword) {
                throw new Error('You need to send your old password to update')
            } 

            const passwordMatch = await bcrypt.compare(data.oldPassword, user.password)

            if(!passwordMatch) {
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

            return user
        } catch (error) {
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
            throw new Error('User not found')
        }

        try {
            const user = await prisma.user.delete({
                where: {
                    id: id
                }
            })

            return "User deleted with success"
        } catch (error) {
            throw new Error('Error deleting user')
        }
    }

    async getUser(id) {
        //Verify if user exists
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if (!user) {
            throw new Error('User not found')
        }

        return user
    }
}

module.exports = {
    User,
}