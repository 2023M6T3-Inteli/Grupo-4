const { PrismaClient } = require("@prisma/client");
const { v4: uuid } = require("uuid");
require("dotenv").config();
const log4js = require("log4js");
const { publish } = require("../mqtt");

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

      loggerContent.info(
        `Tags created successfully for content ${contentOut.id}`
      );
    } catch (error) {
      await prisma.content.delete({
        where: {
          id: contentOut.id,
        },
      });
      loggerContent.error(
        `Content ${contentOut.id} deleted successfully - CAUSE: error creating tags`
      );
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
      const updatedContent = await prisma.content.update({
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
      },
    });

    if (!content) {
      throw new Error("Content not found");
    }

    console.log(content);

    return content;
  }

  async getAllContent() {
    // Verify if content exists
    const content = await prisma.content.findMany({
      where: {
        visible: true,
      },
      include: {
        tags: true,
      }
    });

    if (!content) {
      throw new Error("Content not found");
    }

    return content;
  }

  async reportContent(id, userId, reason) {
    //Verify if content exists
    const content = await prisma.content.findUnique({
      where: {
        id: id,
      },
    });

    if (!content) {
      throw new Error("Content not found");
    }

    try {
      await prisma.content.update({
        where: {
          id: id,
        },
        data: {
          visible: false,
        },
      });
      loggerContent.info(
        `Content ${id} updated successfully - UPDATING CONTENT TO INVISIBLE - REPORT`
      );
    } catch (error) {
      loggerContent.error(
        `Error updating content ${id} - UPDATING CONTENT TO INVISIBLE - REPORT`
      );
      throw new Error("Error updating content");
    }

    try {
      const report = await prisma.reports.create({
        data: {
          id: uuid(),
          userId: userId,
          contentId: id,
          description: "Motivo Exemplo",
        },
      });

      loggerContent.info(`Content ${id} reported successfully`);
      return report;
    } catch (error) {
      loggerContent.error(`Error reporting content ${id}`);
      throw new Error("Error creating report");
    }
  }

  async rateContent(userId, contentId, rate) {
    //Verify if already rated
    const rating = await prisma.rating.findMany({
      where: {
        contentId: contentId,
        userId: userId,
      },
    });

    if (rating.length > 0) {
      try {
        await prisma.rating.update({
          where: {
            id: rating[0].id,
          },
          data: {
            rating: rate,
          },
        });
        loggerContent.info(
          `Content ${contentId} rated successfully - UPDATING RATING`
        );
        return "Projeto avaliado com sucesso";
      } catch (error) {
        loggerContent.error(
          `Error rating content ${contentId} - UPDATING RATING`
        );
        throw new Error("Error rating project");
      }
    } else {
      try {
        await prisma.rating.create({
          data: {
            id: uuid(),
            userId: userId,
            contentId: contentId,
            rating: rate,
          },
        });
        loggerContent.info(`Content ${contentId} rated successfully`);
        return "Projeto avaliado com sucesso";
      } catch (error) {
        loggerContent.error(`Error rating content ${contentId}`);
        throw new Error("Error rating project");
      }
    }
  }

  async getRecommendation(tag) {
    try {
      const response = await publish("Tag Receiver", tag);
      return response;
    } catch (err) {
      throw new Error(`Informação não enviada, pelo erro: ${err}`);
    }
  }

  async getRating(contentId, userId) {
    try {
      const rating = await prisma.rating.findMany({
        where: {
          contentId: contentId,
          userId: userId,
        },
      });

      loggerContent.info(
        `Rating for content ${contentId} and user ${userId} founded successfully`
      );
      return rating;
    } catch (error) {
      loggerContent.error(
        `Error getting rating for content ${contentId} and user ${userId}`
      );
      throw new Error("Error getting rating");
    }
  }
}

module.exports = {
  Content,
};
