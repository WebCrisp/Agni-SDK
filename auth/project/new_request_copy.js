import { config } from 'dotenv'
import axios from 'axios'
import { token_path_create_project } from '../routes.js'

config();

const { BASE_URL,USER_TOKEN } = process.env;
const AuthStr='Bearer '.concat(USER_TOKEN);

export const secretNewRequestCopy = async ({  project_id,api_key ,name ,user, description}) => {
    if( api_key =="" || name=="" || user=="" || description==""){
        return "Please fill all details  Correctly...";
    }else{
        return await axios.put(`${BASE_URL}${token_path_create_project}/${project_id}`, {
            "api_key":api_key,
            "name":name,
            "user":user,
            "description":description,
        },{ headers: { Authorization: AuthStr } }).then(res=>res.data).catch(err => err);
    }
};