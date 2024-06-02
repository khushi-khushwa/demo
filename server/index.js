import express from 'express'
import cors from 'cors'
import form from './route/form.js';
import ConnectToDb from './config/dbConfig.js';
import news from './route/News.js';

const app=express();
app.use(express.json());
app.use(cors());
await ConnectToDb();
app.use('/',form)
app.use('/',news)
app.listen(5000,()=>{
    console.log("start")
})