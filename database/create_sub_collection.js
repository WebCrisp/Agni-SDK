import { config } from 'dotenv'
import axios from 'axios'
import { token_path_create_sub_collection } from './routes.js';

config();

const { BASE_URL,USER_TOKEN } = process.env;
const AuthStr='Bearer '.concat(USER_TOKEN);

export const secretSubCollection =async ({  collection_name,api_key ,sub_collection_name,document_data ,document_id}) => {
    if( api_key =="" || collection_name=="" || sub_collection_name=="" || document_data=="" || document_id==""){
        return "Please fill all details  Correctly...";
    }else{
        return await axios.post(`${BASE_URL}${token_path_create_sub_collection}`, {
            "collection_name":collection_name,
            "api_key":api_key,
            "sub_collection_name":sub_collection_name,
            "document_data":document_data,
            "document_id":document_id,
        },{ headers: { Authorization: AuthStr } }).then(res=>res.data).catch(err => err.response.data);
    }
};