import axios from 'axios';
//require('dotenv').config();

const API_URL = "http://localhost:3001";


const userService = {
    auth: async (email, pass) => {

        console.log(`${API_URL}/v1/auth`)

        const auth = await axios.post(`${API_URL}/v1/user/auth`, {
            email: email,
            password: pass
        })

        return auth
    }
}

export default userService;

