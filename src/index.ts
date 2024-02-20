import * as process from "process";

import bodyParser from "body-parser";
import  mongoose from "mongoose";
import express from 'express'
import cors from 'cors'

const dotenv=require('dotenv')
dotenv.config({ path: 'src/.env' });

const app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const  port=process.env.SERVER_PORT


try {
    mongoose.connect("mongodb://127.0.0.1:27017/utility_db").then(()=>{
        app.listen(port,()=>{
            console.log(`serve running ${port}`)
        })
    })

}catch (err){
    console.log(err)
}
