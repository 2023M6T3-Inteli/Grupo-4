const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { v4: uuid } = require('uuid')
require('dotenv').config()


const prisma = new PrismaClient()
class Project {
    async Create(email, pass, name, area, tags) {
        //Verify if project already exists
        const project = await prisma.project.findUnique({
            where: {
                email: email
            }
        })

        if (project) {
            throw new Error('Project already exists')
        }

        //Verificação de senha != "", e HASH da mesma
        if(pass) {
            const hashedPassWord = await bcrypt.hash(pass, 8) 

            pass = hashedPassWord
        }

        try {
            const project = await prisma.project.create({
                data: {
                    id: uuid(),
                    email: email,
                    password: pass,
                    name: name,
                    area: area,
                    tags: tags
                }
            })

            return project
        } catch (error) {
            throw new Error('Error creating project')
        }
    }


    async update(id, data) {
        //Verify if project exists
        const project = await prisma.project.findUnique({
            where: {
                id: id
            }
        })

        if (!project) {
            throw new Error('Project not found')
        }

        if(!data) {
            throw new Error('No data to update')
        }

        if(data.password) {
            if (!data.oldPassword) {
                throw new Error('You need to send your old password to update')
            } 

            const passwordMatch = await bcrypt.compare(data.oldPassword, project.password)

            if(!passwordMatch) {
                throw new Error('Invalid password, so we cant update')
            }

            const hashedPassWord = await bcrypt.hash(data.password, 8) 

            data.password = hashedPassWord
        }

        delete data.oldPassword

        try {
            const project = await prisma.project.update({
                where: {
                    id: id
                },
                data,
            })

            return project
        } catch (error) {
            throw new Error('Error updating project')
        }

    }

    async delete(id) {
        //Verify if project exists
        const project = await prisma.project.findUnique({
            where: {
                id: id
            }
        })

        if (!project) {
            throw new Error('Project not found')
        }

        try {
            const project = await prisma.project.delete({
                where: {
                    id: id
                }
            })

            return "Project deleted with success"
        } catch (error) {
            throw new Error('Error deleting project')
        }
    }

    async getProject(id) {
        //Verify if project exists
        const project = await prisma.project.findUnique({
            where: {
                id: id
            }
        })

        if (!project) {
            throw new Error('Project not found')
        }

        return project
    }
}

module.exports = {
    Project,
}