const { PrismaClient } = require('@prisma/client')
const { v4: uuid } = require('uuid')
require('dotenv').config()
const log4js = require('log4js');


const prisma = new PrismaClient()

const loggerProject = log4js.getLogger('project');


class Project {
    async Create(title, description, projectType, startDate, endDate, deadline, ownerId, roles) {
        const dateMock = new Date()

        roles = JSON.parse(roles)

        let projectOut;

        //Create project
        try {
            const project = await prisma.project.create({
                data: {
                    id: uuid(),
                    title: title,
                    description: description,
                    projectType: projectType,
                    ownerId: ownerId,
                    startDate: dateMock,
                    endDate: dateMock,
                    deadline: dateMock,
                }
            })

            projectOut = project
        } catch(err) {
            loggerProject.error(`Problems on server creating project: ${err}`)
            throw new Error('Error when creating project')
        }

        //Create roles
        try {
            roles.map(async (role) => {
                await prisma.offers.create({
                    data: {
                        id: uuid(),
                        name: role.nome,
                        area: role.area,
                        qntVagas: Number(role.qntVagas),
                        projectId: projectOut.id,
                    }
                })
            })

            loggerProject.info(`Roles created successfully for project ${projectOut.id}`)
        } catch(err) {
            loggerProject.error(`Problems on server creating roles: ${err}`)
            await prisma.project.delete({
                where: {
                    id: projectOut.id
                }
            })
            loggerProject.info(`Project ${projectId} deleted successfully - CAUSE: Error when creating roles`)
            throw new Error('Error when creating roles')
        }

        //Add points to user
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
        } catch(err) {
            loggerProject.error(`Problems on server updating user points: ${err}`)
        }

        loggerProject.info(`Project ${projectOut.id} created successfully`)
        return projectOut
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
            const projects = await prisma.project.findMany({
                include: {
                    owner: {
                        select: {
                            name: true,
                            points: true,
                            area: true,
                        }
                    },
                }
            });

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
                },
                include: {
                    owner: {
                        select: {
                            name: true,
                            points: true,
                            area: true,
                        }
                    },
                    tags: true
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