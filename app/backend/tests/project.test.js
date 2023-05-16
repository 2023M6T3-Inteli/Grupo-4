it('Should create a project', async () => {
    const project = {
      title: "Project Title",
      leader: "Project Leader",
      description: "Project Description",
      subject: "Project Subject",
      startDate: "2023-05-16",
      endDate: "2023-06-16",
      deadline: "2023-06-15",
      deliveryTime: "12:00",
      roles: [{ name: "Role 1", count: 1 }],
      tags: ["tag1", "tag2"],
    };
  
    const result = await Project.createProject(project);
  
    idToDelete = result.id;
  
    return expect(result.title).toBe(project.title);
  });

  