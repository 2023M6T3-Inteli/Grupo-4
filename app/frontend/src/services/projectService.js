import axios from "axios";
//require('dotenv').config();
import Cookies from "universal-cookie";

const cookies = new Cookies();

const API_URL = "http://localhost:3001";

const projectService = {
  getProject: async () => {
    const token = cookies.get("token");

    const project = await axios.get(`${API_URL}/v1/project/getAll`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return project;
  },

  createProject: async (project) => {
    const token = cookies.get("token");

    const newProject = await axios.post(
      `${API_URL}/v1/project/create`,
      project,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return newProject;
  },

  applyProject: async (why, projectId, offerId) => {
    const token = cookies.get("token");

    const applyData = {
      why: why,
      projectId: projectId,
      offerId: offerId,
    };

    const apply = await axios.post(
      `${API_URL}/v1/apply/create`,
      applyData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return apply;
  },
};

export default projectService;
