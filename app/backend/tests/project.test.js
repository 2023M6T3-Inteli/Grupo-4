const service = require('../services/project');

const Project = new service.Project();

let idToDelete;

describe("Creating a project", () => {
  it("Should create a project", async () => {
    const project = {
      title: "Project Title 1",
      description: "Project Description 1 ",
      projectType: "Tech",
      startDate: "2023-05-30 17:05:39.728",
      endDate: "2023-06-23 17:05:39.728",
      deadline: "2023-06-15 17:08:39.728",
      roles: "[\n  {\n    \"nome\": \"Vaga de TI\",\n    \"qntVagas\": \"10\",\n    \"area\": \"Tecnologia\"\n  }  \n]",
      ownerId: "6f88dcf3-b761-44ec-aeb9-7413a1d1de4f",
      tags: '["tag1", "tag2"]',
    };
  
    const result = await Project.Create(
      project.title, 
      project.description, 
      project.projectType,
      project.startDate,
      project.endDate, 
      project.deadline,
      project.ownerId,
      project.roles,
      project.tags
    );

    idToDelete = result.id;

    return expect(result.title).toBe(project.title)
  });
});

  describe("Get a project", () => {
    it("Should not get a project by an unexisting id", async () => {
      try {
        const result = await Project.getProject("123");
  
        return expect(result).toBe("Error getting project");
      } catch (err) {
        return expect(err.message).toBe("Error getting project");
      }
      
    })

    it("Should get a project by id", async () => {
      const result = await Project.getProject(idToDelete);
  
      return expect(result.id).toBe(idToDelete);
    });
  });

  describe("Update a project", () => {
    it("Should not update a project by an unexisting id", async () => {
      const project = {
        title: "Title project 2",
      };

      try {
        const result = await Project.update("123", project);

        return expect(result.title).toBe(project.title);
      } catch (err) {
        return expect(err.message).toBe("Project not found");
      }
    })

    it("Should update a project by id", async () => {
      const project = {
        title: "Title project 2",
      };

      const result = await Project.update(idToDelete, project);

      return expect(result.title).toBe(project.title);
  });
});

describe("Delete a project", () => {
  it("Should not delete a project by an unexisting id", async () => {
    try {
      const result = await Project.delete("123");

      return expect(result).toBe("Project deleted with success");
    } catch (err) {
      return expect(err.message).toBe("Project not found");
    }
  });

  it("Should delete a project by id", async () => {
    const result = await Project.delete(idToDelete);

    return expect(result).toBe("Project deleted with success");
  });
});


  