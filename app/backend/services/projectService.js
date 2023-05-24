const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { v4: uuid } = require('uuid')
require('dotenv').config()


const prisma = new PrismaClient()
class Project {
    async Create(title, description, projectType, coleaderId, ownerId) {

        try {
            const project = await prisma.project.create({
                data: {
                    id: uuid(),
                    title: title,
                    description: description,
                    projectType: projectType,
                    coleaderId: coleaderId,
                    ownerId: ownerId
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
// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

// console.log('prisma')

// class Project {
//   async create(data) {
//     const project = await prisma.project.create({
//       data: {
//         title: data.title,
//         leader: data.leader,
//         description: data.description,
//         subject: data.subject,
//         startDate: data.startDate,
//         endDate: data.endDate,
//         deadline: data.deadline,
//         deliveryTime: data.deliveryTime,
//         roles: {
//           create: data.roles,
//         },
//         tags: {
//           create: data.tags.map(tag => ({ name: tag })),
//         },
//       },
//     })
//     return project
//   }

//   // Add methods for updating, deleting, and getting a project
// }

// module.exports = {
//   Project,
// }

// console.log('ProjectService.js')
