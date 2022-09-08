

import  express from "express"

import dotenv from 'dotenv'

import cors from "cors"

import db from "./config/db.js"

import bookRoute from "../src/routes/bookRoute.js"






dotenv.config();

let app= express()

app.use(express.json())

app.use(cors())




app.use("/api/v1/books",bookRoute);

app.use("/api/v1/books/:id", bookRoute)

app.use("/api/v1/books/add",bookRoute)

app.use("/api/v1/books/update/:id", bookRoute)

app.use("/api/v1/books/:id", bookRoute)

db.sequelize.sync().then((()=>{


    app.listen(3015,async()=>{

        console.log("Express server is listening ");
    })
}));


