import { config } from 'dotenv'
import axios from 'axios'

//user 
import { login,signup,details } from './auth/user/index.js';

//project 
import {create_project,create_project_copy, new_request , new_request_copy} from './auth/project/index.js';

config();

// call for user
// console.log(await login({email:"root@gmail.com", password:"1234"}));
// console.log(await signup({username:"mayur",email:"mayur@gmail.com",first_name:"mayur",last_name:"mayur", password:"12345"}));
// console.log(await details({email:"root@gmail.com",password:"1234"}));

// call for project
//TODO respose with provide auth token
//TODO auth token is required for create project
// console.log(await create_project({user_email:"root@gmail.com",project_name:"Haku021",description:"description of project"}));

//TODO auth token is required for create project copy
//TODO what is the difference between create project and create project copy
// console.log(await create_project_copy({user_email:"root@gmail.com",project_name:"Haku021",description:"description of project"}));

// console.log(await new_request({project_id:"026e2860-c726-11ed-a0b4-8030493e60c6",api_key:"2bf30adb-00f2-432a-a31d-6a554444c7bf"}));
// console.log(await new_request_copy({project_id:"026e2860-c726-11ed-a0b4-8030493e60c6",api_key:"2bf30adb-00f2-432a-a31d-6a554444c7bf",name:"Haku00",user:"root@gmail.com",description:"This is desc new"}));
