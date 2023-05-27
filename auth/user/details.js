import { config } from 'dotenv'
import axios from 'axios'
import { token_path_details } from '../routes.js'

config();

const { BASE_URL } = process.env;

export const secretDetails = async ({ email, password }) => {
    if(email =="" || password ==""){
        return "Please fill Email And Password Correctly...";
    }else{
        return  await axios.post(`${BASE_URL}${token_path_details}`, {
             "email": email,
             "password": password,
        }).then(res=>res.data).catch(err=>"Not have active account of given details");
    }
   
};