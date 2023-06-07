import { config } from 'dotenv'
import axios from 'axios'
import { token_path_delete_document } from './routes.js';

config();

const { BASE_URL,USER_TOKEN } = process.env;
const AuthStr='Bearer '.concat(USER_TOKEN);

export const secretDeleteDocument =async ({  collection_name,api_key ,sub_collection_name,document_data ,project_id}) => {
    if( api_key =="" || collection_name=="" || sub_collection_name=="" || document_data=="" || project_id==""){
        return "Please fill all details  Correctly...";
    }else{
        return await axios.delete(`${BASE_URL}${token_path_delete_document}${project_id}`, {
            "collection_name":collection_name,
            "api_key":api_key,
            "document_data":document_data,
            "project_id":project_id,
        },{ headers: { Authorization: AuthStr } }).then(res=>res.data).catch(err => err.response.data);
    }
};