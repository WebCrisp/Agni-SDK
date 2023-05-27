import { config } from 'dotenv'
import axios from 'axios'
import { token_path_create_project } from '../routes.js'

config();

const { BASE_URL,USER_TOKEN} = process.env;
const AuthStr='Bearer '.concat(USER_TOKEN);
export const secretNewRequest = async ({ project_id, api_key }) => {
    if(project_id =="" || api_key ==""){
        return "Please fill api_key And project_id  Correctly...";
    }else{
        return await axios.get(`${BASE_URL}${token_path_create_project}/${project_id}`,{ headers: { Authorization: AuthStr } ,data:  { api_key: `${api_key}`  }}).then(res=>res.data).catch(err => err.response.data.detail);
       
    }
};