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

const loggerContent = log4js.getLogger("content");

class Content {
  async Create(title, description, tags, links, ownerId) {

    let contentOut;

    tags = JSON.parse(tags);

    try {
      const content = await prisma.content.create({
        data: {
          id: uuid(),
          title: title,
          description: description,
          links: links,
          ownerId: ownerId,
        },
      });

      contentOut = content;
      loggerContent.info(`Content ${content.id} created successfully`);
    } catch (error) {
    //   logger.error(`Problems on server: ${error}`);
      // throw new Error("Error when creating content");
      throw new Error(error);
    }

    //Create Tags
    try {
      tags.map(async (tag) => {
        await prisma.tag.create({
          data: {
            id: uuid(),
            name: tag,
            contentId: contentOut.id,
          },
        });
      });

      loggerContent.info(`Tags created successfully for content ${contentOut.id}`);
    } catch (error) {
      await prisma.content.delete({
        where: {
          id: contentOut.id,
        },
      });
      loggerContent.error(`Content ${contentOut.id} deleted successfully - CAUSE: error creating tags`);
      throw new Error("Error when creating tags");
    }

    return contentOut;
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
      include: {
        owner: true,
        tags: true,
      }
    });

    if (!content) {
      throw new Error("Content not found");
    }

    console.log(content)

    return content;
  }

  async getAllContent() {
    //Verify if content exists
    const content = await prisma.content.findMany({
      include: {
        tags: true,
      }
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
