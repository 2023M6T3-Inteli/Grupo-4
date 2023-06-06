const { PrismaClient } = require("@prisma/client");
const { v4: uuid } = require("uuid");
require("dotenv").config();
const log4js = require("log4js");

const prisma = new PrismaClient();

//Configurando Log de Usuários
// log4js.configure({
//     appenders: { user: { type: "file", filename: "logs/application.log" } },
//     categories: { default: { appenders: ["application"], level: "info" } },
// });

const loggerApply = log4js.getLogger("apply");

class Apply {
    async Create(contentId, offerId, userId, why) {
        //Verify if already exists
        const applyExists = await prisma.applies.findMany({
            where: {
                projectId: contentId,
                userId: userId,
            },
        });

        if (applyExists.length > 0) {
            loggerApply.error(`Apply already exists for content ${contentId} and user ${userId}`);
            throw new Error("Apply already exists");
        }
        
        //Create Apply
        try {
            const apply = await prisma.applies.create({
                data: {
                    id: uuid(),
                    why: why,
                    projectId: contentId,
                    offerId: offerId,
                    userId: userId,
                },
            });
            
            loggerApply.info(`Apply ${apply.id} created successfully`);
            return apply;
        } catch (error) {
            loggerApply.error(`Error creating apply: ${error}`)
            throw new Error(error);
        }
    }

    async GetByProjectId(projectId) {
        try {
            const apply = await prisma.applies.findMany({
                where: {
                    projectId: projectId
                }
            });
            loggerApply.info(`Applies founded for project: ${projectId} successfully`);
            return apply;
        } catch (error) {
            loggerApply.error(`Error getting apply: ${error}`)
            throw new Error(error);
        }
    }

    async GetByUserId(userId) {
        try {
            const apply = await prisma.applies.findMany({
                where: {
                    userId: userId
                }
            });
            loggerApply.info(`Applies founded for user: ${userId} successfully`);
            return apply;
        } catch (error) {
            loggerApply.error(`Error getting apply: ${error}`)
            throw new Error(error);
        }
    }

    async GetByOfferId(offerId) {
        try {
            const apply = await prisma.applies.findMany({
                where: {
                    offerId: offerId
                }
            });
            loggerApply.info(`Applies founded for offer: ${offerId} successfully`);
            return apply;
        } catch (error) {
            loggerApply.error(`Error getting apply: ${error}`)
            throw new Error(error);
        }
    }

    async updateStatus(applyId, status) {
        try {
            const apply = await prisma.applies.update({
                where: {
                    id: applyId
                },
                data: {
                    status: status
                }
            });
            loggerApply.info(`Apply ${applyId} updated successfully`);
            return apply;
        } catch (error) {
            loggerApply.error(`Error updating apply: ${error}`)
            throw new Error(error);
        }
    }

    async delete(applyId) {
        try {
            const apply = await prisma.applies.delete({
                where: {
                    id: applyId
                }
            });
            loggerApply.info(`Apply ${applyId} deleted successfully`);
            return apply;
        } catch (error) {
            loggerApply.error(`Error deleting apply: ${error}`)
            throw new Error(error);
        }
    }
}

module.exports = {
  Apply,
};
