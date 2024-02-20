import * as process from "process";

const dotenv=require('dotenv')
dotenv.config({ path: 'src/.env' });

console.log(process.env.SERVER_PORT)
