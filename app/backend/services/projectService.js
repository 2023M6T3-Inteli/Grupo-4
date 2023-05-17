const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class Project {
  async create(data) {
    const project = await prisma.project.create({
      data: {
        title: data.title,
        leader: data.leader,
        description: data.description,
        subject: data.subject,
        startDate: data.startDate,
        endDate: data.endDate,
        deadline: data.deadline,
        deliveryTime: data.deliveryTime,
        roles: {
          create: data.roles,
        },
        tags: {
          create: data.tags.map(tag => ({ name: tag })),
        },
      },
    })
    return project
  }

  // Add methods for updating, deleting, and getting a project
}

module.exports = {
  Project,
}
