import axios from 'axios';
//require('dotenv').config();
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

const API_URL = "http://localhost:3001";


const contentService = {
    getContent: async () => {

        const token = cookies.get('token')

        const content = await axios.get(`${API_URL}/v1/content/getContent`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return content
    }
}

export default contentService;

