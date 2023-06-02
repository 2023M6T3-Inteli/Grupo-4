import axios from "axios";
//require('dotenv').config();
import Cookies from "universal-cookie";

const cookies = new Cookies();

const API_URL = "http://localhost:3001";

const contentService = {
  getContent: async () => {
    const token = cookies.get("token");

    const content = await axios.get(`${API_URL}/v1/content/getContent`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return content;
  },

  createContent: async (content) => {
    const token = cookies.get("token");

    const newContent = await axios.post(
      `${API_URL}/v1/content/create`,
      content,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return newContent;
  },

  deleteContent: async (contentId) => {
    const token = cookies.get("token");

    const newContent = await axios.delete(
      `${API_URL}/v1/content/delete/${contentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return newContent;
  },

  reportContent: async (contentId) => {
    const token = cookies.get("token");

    const reportContent = await axios.get(
      `${API_URL}/v1/content/report/${contentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return reportContent;
  },
};

export default contentService;
