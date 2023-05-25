import axios from 'axios';
//require('dotenv').config();
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

const API_URL = "http://localhost:3001";


const projectService = {
    getContent: async () => {

        const token = cookies.get('token')

        const project = await axios.get(`${API_URL}/v1/project/getProject`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return project
    }
}

export default projectService;

