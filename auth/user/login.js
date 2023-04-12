import { config } from 'dotenv'
import axios from 'axios'
import { token_path } from '../routes.js'

config();

const { BASE_URL } = process.env;

export const secretLogin = async ({ email, password }) => {
    const { data } = await axios.post(`${BASE_URL}${token_path}`, {
        "email": email,
        "password": password,
    })
    return data
};