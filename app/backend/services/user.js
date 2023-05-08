const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class Contact {
    async contact(email, pass) {
        //Put the code here
    }
}

module.exports = {
    Contact,
}