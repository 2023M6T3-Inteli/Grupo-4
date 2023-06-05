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

    async GetByContentId(contentId) {
        
    }
}

module.exports = {
  Content,
};
