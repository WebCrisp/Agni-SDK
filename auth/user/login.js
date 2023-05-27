import { config } from 'dotenv'
import axios from 'axios'
import { token_path_login } from '../routes.js'

config();

const { BASE_URL } = process.env;

export const secretLogin = async ({ email, password }) => {
    const { data } = await axios.post(`${BASE_URL}${token_path_login}`, {
        "email": email,
        "password": password,
    })
    return data
};