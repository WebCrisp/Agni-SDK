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


//database

// console.log(await query_document({ collection_name:"Haku00222",api_key:"2bf30adb-00f2-432a-a31d-6a554444c7bf"
//                         ,document_data:`{"title": "Fifth Blog I'm adding", "author": "jatin", "content": "short-blog"}`,
//                         project_id:'026e2860-c726-11ed-a0b4-8030493e60c6'}));


// console.log(await create_sub_collection({ collection_name:"Haku00222",api_key:"2bf30adb-00f2-432a-a31d-6a554444c7bf",
//                                        sub_collection_name:"J sub collection",document_data:`{"title": "First Blog"}`,
//                                        document_id:'hahaha123'}));         


// console.log(await add_document({ collection_name:"Haku00225",api_key:"2bf30adb-00f2-432a-a31d-6a554444c7bf"
//         ,document_data:`{"title": "Fifth Blog I'm adding", "author": "jatin", "content": "short-blog"}`,
//         project_id:'026e2860-c726-11ed-a0b4-8030493e60c6'}));


// console.log(await delete_document({ collection_name:"blog-collection",
//                                 api_key:"0db8b345-3b45-42dd-a4e9-ff43afbda07b",
//                                 document_data:`{"title": "Fifth Blog I'm adding", "author": "jatin", "content": "short-blog"}`,
//                                 project_id:'e4eeea0c-ab72-11ed-b531-e9b49344f47a'
//                                }))


console.log(await update_document({ collection_name:"Haku00222",api_key:"2bf30adb-00f2-432a-a31d-6a554444c7bf"
                        ,document_data:`{"title": "Fifth Blog I'm adding", "author": "jatin", "content": "short-blog"}`,
                        project_id:'026e2860-c726-11ed-a0b4-8030493e60c6'}));
