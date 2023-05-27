import { config } from 'dotenv'
import axios from 'axios'
import { token_path_create_project } from '../routes.js'

config();

const { BASE_URL, USER_TOKEN } = process.env;
const AuthStr = 'Bearer '.concat(USER_TOKEN);

export const secretCreateProject = async ({ user_email, project_name, description }) => {
    if (user_email == "" || project_name == "") {
        return "Please fill User Email And Project Name Correctly...";
    } else {
        return await axios.post(`${BASE_URL}${token_path_create_project}`, {
            "user": user_email,
            "name": project_name,
            "description": description,
        }, {
            headers: { Authorization: AuthStr }
        }).then(res => res).catch(err => ("Internal Server Error", err));
    }
};