import { config } from 'dotenv'
import axios from 'axios'
import { token_path_query_document } from './routes.js';

config();

const { BASE_URL,USER_TOKEN } = process.env;
const AuthStr='Bearer '.concat(USER_TOKEN);

export const secretQueryDocument =async ({  collection_name,api_key ,document_data ,project_id}) => {
    if( api_key =="" || collection_name=="" || document_data=="" || project_id==""){
        return "Please fill all details  Correctly...";
    }else{
        return await axios.get(`${BASE_URL}${token_path_query_document}${project_id}`, {
            "collection_name":collection_name,
            "api_key":api_key,
            "document_data":document_data,
            "project_id":project_id,
        },{ headers: { Authorization: AuthStr } }).then(res=>res.data).catch(err => err.code +":" + err.response.data.detail);
    }
};