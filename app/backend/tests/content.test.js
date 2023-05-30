const service = require("../services/content");

const Content = new service.Content();

let idToDelete;

describe("Creating Content", () => {
  it("Should create a content", async () => {
    const content = {
      title: "Teste",
      description: "Description",
      links: '["https://www.youtube.com/watch?v=91E_lYSUmg8"]',
      tags: '["JS", "React", "Node"]',
      ownerId: "1187adb8-2e7b-430a-9cee-25cd4d897fae",
    };

    const result = await Content.Create(
      content.title,
      content.description,
      content.links,
      content.tags,
      content.ownerId
    );

    idToDelete = result.id;

    return expect(result.title).toBe(content.title);
  });

  it("Should get a content by id", async () => {
    const result = await Content.getContent(idToDelete);

    return expect(result.id).toBe(idToDelete);
  });

  it("Should update a content by id", async () => {
    const content = {
      title: "New Title",
    };

    const result = await Content.update(idToDelete, content);

    return expect(result.title).toBe(content.title);
  });

  it("Should delete a content by id", async () => {
    const result = await Content.delete(idToDelete);

    return expect(result).toBe("Content deleted with success");
  });
});
