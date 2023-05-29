import axios from 'axios';
//require('dotenv').config();
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

const API_URL = "http://localhost:3001";


const userService = {
    auth: async (email, pass) => {

        console.log(`${API_URL}/v1/auth`)

        const auth = await axios.post(`${API_URL}/v1/user/auth`, {
            email: email,
            password: pass
        })

        return auth
    },
    getUser: async () => {

        const token = cookies.get('token')

        const user = await axios.get(`${API_URL}/v1/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return user
    },
    getAll: async () => {

        const token = cookies.get('token')

        const users = await axios.get(`${API_URL}/v1/user/getAll`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return users
    },
    getUserById: async (id) => {
            
            const token = cookies.get('token')
    
            const user = await axios.get(`${API_URL}/v1/user/getUserByID/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
    
            return user
    }   
}

export default userService;

