import express from "express";
import db from './db.js';
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import ArticleRouter from './articleRouter.js'
import cors from 'cors'

dotenv.config();

const app =express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/Back-end/images',express.static('images'));//specify where express should looks for static files

app.use(cors());

app.use('/api/article',ArticleRouter);

db.sync({force:false});

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server is running on port ${process.env.PORT}` );
    }
})

