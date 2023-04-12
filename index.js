import { config } from 'dotenv'
import axios from 'axios'
import { login } from './auth/user/index.js';

config();

console.log(await login({email:"root@gmail.com", password:"1234"}));