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

// const logger = log4js.getLogger("application");

class Content {
  async Create(title, description, tags, media, ownerId) {

    console.log(ownerId)

    try {
      const content = await prisma.content.create({
        data: {
          id: uuid(),
          title: title,
          description: description,
          tags: tags,
          media: media,
          ownerId: ownerId,
        },
      });

    //   logger.info(`Content ${content.id} created successfully`);

      return content;
    } catch (error) {
    //   logger.error(`Problems on server: ${error}`);
      throw new Error("Error when creating content");
    }
  }

  async update(id, data) {
    //Verify if content exists
    const content = await prisma.content.findUnique({
      where: {
        id: id,
      },
    });

    if (!content) {
      throw new Error("Content not found");
    }

    if (!data) {
      throw new Error("No data to update");
    }

    try {
      const updatedContent  = await prisma.content.update({
        where: {
          id: id,
        },
        data,
      });

      return updatedContent;
    } catch (error) {
      throw new Error("Error updating content");
    }
  }

  async delete(id) {
    //Verify if project exists
    const content = await prisma.content.findUnique({
      where: {
        id: id,
      },
    });

    if (!content) {
      throw new Error("Content not found");
    }

    try {
      const content = await prisma.content.delete({
        where: {
          id: id,
        },
      });

      return "Content deleted with success";
    } catch (error) {
      throw new Error("Error deleting content");
    }
  }

  async getContent(id) {
    //Verify if content exists
    const content = await prisma.content.findUnique({
      where: {
        id: id,
      },
    });

    if (!content) {
      throw new Error("Content not found");
    }

    return content;
  }
}

module.exports = {
  Content,
};