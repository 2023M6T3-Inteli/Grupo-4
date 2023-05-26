const { PrismaClient } = require('@prisma/client')
const { v4: uuid } = require('uuid')
require('dotenv').config()
const log4js = require('log4js');


const prisma = new PrismaClient()

const loggerProject = log4js.getLogger('project');


class Project {
    async Create(title, description, projectType, deliveryTime, startDate, endDate, deadline, ownerId) {
        const dateMock = new Date()

        try {
            const project = await prisma.project.create({
                data: {
                    id: uuid(),
                    title: title,
                    description: description,
                    projectType: projectType,
                    ownerId: ownerId,
                    deliveryTime: dateMock,
                    startDate: dateMock,
                    endDate: dateMock,
                    deadline: dateMock,
                }
            })

            loggerProject.info(`Project ${project.id} created successfully`)

            try {
                await prisma.user.update({
                    where: {
                        id: ownerId
                    },
                    data: {
                        points: {
                            increment: +100
                        }
                    }
                })

                loggerProject.info(`Added points to user ${ownerId} for creating project`)
            } catch(err) {
                loggerProject.error(`Problems on server updating user points: ${err}`)
            }

            return project
        } catch (error) {
            console.log(error)
            loggerProject.error(`Problems on server: ${error}`)
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
            loggerProject.error("Someone tried to update a project that doesn't exists | ID (project) passed: " + id)
            throw new Error('Project not found')
        }

        if(!data) {
            loggerProject.error("Someone tried to update a project passign nothing | ID (project) passed: " + id)
            throw new Error('No data to update')
        }

        try {
            const project = await prisma.project.update({
                where: {
                    id: id
                },
                data,
            })

            loggerProject.info(`Project ${project.id} updated successfully with data: ${JSON.stringify(data)}`)

            return project
        } catch (error) {
            loggerProject.error(`Problems on server updating project: ${error}`)
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
            loggerProject.error("Someone tried to delete a project that doesn't exists | ID (project) passed: " + id)
            throw new Error('Project not found')
        }

        try {
            const project = await prisma.project.delete({
                where: {
                    id: id
                }
            })

            loggerProject.info(`Project ${project.id} deleted successfully`)
            return "Project deleted with success"
        } catch (error) {
            loggerProject.error(`Problems on server deleting project: ${error}`)
            throw new Error('Error deleting project')
        }
    }

    async getAllProjects() {
        try {
            //Getting all projects
            const projects = await prisma.project.findMany({});

            return projects
        } catch (error) {
            loggerProject.error(`Problems on server getting all projects: ${error}`)
            throw new Error('Error getting all projects')
        }
    }

    async getProject(id) {
        try {
            //Getting project by id
            const project = await prisma.project.findUnique({
                where: {
                    id: id
                }
            })

            if (!project) {
                loggerProject.error("Someone tried to get a project that doesn't exists | ID (project) passed: " + id)
                throw new Error('Project not found')
            }

            return project
        } catch (error) {
            loggerProject.error(`Problems on server getting project: ${error}`)
            throw new Error('Error getting project')
        }
    }
}

module.exports = {
    Project,
}