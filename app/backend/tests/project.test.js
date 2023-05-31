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
        roles: "{}",
        tags: '["tag1", "tag2"]',
      };
    
      const result = await Project.Create(
        project.title, 
        project.description, 
        project.projectType,
        project.startDate,
        project.endDate, 
        project.deadline, 
        project.roles,
        project.tags);

        idToDelete = result.id;

      return expect(result.title).toBe(user.title)
    });
  });

  describe("Get a project", () => {
    it("Should get a project by id", async () => {
      const result = await Project.getProject(idToDelete);
  
      return expect(result.id).toBe(idToDelete);
    });
  });

  describe("Update a project", () => {
    it("Should update a project by id", async () => {
      const project = {
        title: "Title project 2",
      };

    const result = await Project.update(idToDelete, project);

    return expect(result.title).toBe(project.title);
  });
});

describe("Delete a project", () => {
  it("Should delete a project by id", async () => {
    const result = await Project.delete(idToDelete);

    return expect(result).toBe("Project deleted with success");
  });
});


  