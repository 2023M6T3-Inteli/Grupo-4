const { PrismaClient } = require('@prisma/client')
const { v4: uuid } = require('uuid')
require('dotenv').config()
const log4js = require('log4js');

const prisma = new PrismaClient()

//Configurando Log de Usuários
log4js.configure({
    appenders: { user: { type: "file", filename: "logs/application.log" } },
    categories: { default: { appenders: ["application"], level: "info" } },
});

const logger = log4js.getLogger('application');


class Project {
    async Create(title, description, projectType, deliveryTime, startDate, endDate, deadline, ownerId) {
        try {
            const project = await prisma.project.create({
                data: {
                    id: uuid(),
                    title: title,
                    description: description,
                    projectType: projectType,
                    ownerId: ownerId,
                    deliveryTime: deliveryTime,
                    startDate: startDate,
                    endDate: endDate,
                    deadline: deadline,
                }
            })

            logger.info(`Project ${project.id} created successfully`)

            return project
        } catch (error) {
            logger.error(`Problems on server: ${error}`)
            throw new Error('Error when creating project')
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
            logger.error(`Someone tried to find project ${id}, but it doesn't exists`)
            throw new Error('Project not found')
        }

        logger.info(`Someone searched for project ${id}`)

        return project
    }

    async getAllProjects() {
        //Verify if project exists
        const projects = await prisma.project.findAll(

        )

        if (!projects) {
            throw new Error('Projects not found')
        }

        return projects
    }
}

module.exports = {
    Project,
}