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

class Content {
    async Create(contentId, offerId, userId, why) {
        //Create Apply
        try {
            const apply = await prisma.apply.create({
                data: {
                    id: uuid(),
                    why: why,
                    contentId: contentId,
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
            const apply = await prisma.apply.findMany({
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
            const apply = await prisma.apply.findMany({
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
            const apply = await prisma.apply.findMany({
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
            const apply = await prisma.apply.update({
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
            const apply = await prisma.apply.delete({
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
  Content,
};
