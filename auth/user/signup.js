import { config } from 'dotenv'
import axios from 'axios'
import { token_path_signup } from '../routes.js'

config();

const { BASE_URL } = process.env;

export  const secretSignUp=async ({ username ,email,first_name,last_name ,password})=> {
    if(username=="" || email=="" || first_name=="" || last_name=="" || password ==""){
        // alert("Please fill Email And Password correctly...");
        console.log("Please fill All the required feild Correctly...");
    }else{
    const {data}  = await axios.post(`${BASE_URL}${token_path_signup}`, {
         "username": username,
         "email": email,
         "first_name": first_name,
         "last_name": last_name,
         "password": password,
    }).catch(error => error)
    if(data){
        return data ;
    }else{
        return "Error in Signup please fill all the details correctly";
    }
}
}