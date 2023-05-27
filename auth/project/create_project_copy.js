import { config } from 'dotenv'
import axios from 'axios'
import { token_path_create_project } from '../routes.js'

config();

const { BASE_URL } = process.env;

export const secretCreateProjectCopy = async ({ user_email, project_name , description }) => {
    if(user_email =="" || project_name ==""){
        return "Please fill User Email And Project Name Correctly...";
    }else{
        return await axios.delete(`${BASE_URL}${token_path_create_project}`, {
            data :{
                "user": user_email,
                "name": project_name,
                "description":description,
            }
    }).then(res=>res).catch(err => "Internal Server Error while deleting");
       
    }
   
   
};