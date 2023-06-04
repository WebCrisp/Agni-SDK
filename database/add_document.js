import { config } from 'dotenv'
import axios from 'axios'
import { token_path_create_project } from './routes.js';

config();

const { BASE_URL,USER_TOKEN } = process.env;
const AuthStr='Bearer '.concat(USER_TOKEN);

export const secretAddDocument =async ({  collection_name,api_key ,document_data ,project_id}) => {
    if( api_key =="" || collection_name=="" || document_data=="" || project_id==""){
        return "Please fill all details  Correctly...";
    }else{
        return await axios.put(`${BASE_URL}${token_path_create_project}`, {
            "collection_name":collection_name,
            "api_key":api_key,
            "document_data":document_data,
            "project_id":project_id,
        },{ headers: { Authorization: AuthStr } }).then(res=>res).catch(err => err);
    }
};