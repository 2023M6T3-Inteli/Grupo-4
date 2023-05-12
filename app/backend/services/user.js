const { PrismaClient } = require('@prisma/client')

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
                    email: email,
                    pass: pass,
                    name: name,
                    area: area,
                    tags: tags
                }
            })

            return user
        } catch (error) {
            console.log(error)
            throw new Error('Error creating user')
        }
    }
}

module.exports = {
    User,
}