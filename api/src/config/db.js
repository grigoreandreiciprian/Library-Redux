import { Sequelize } from "sequelize";

import Book from  "../models/book.js"
import dotenv from "dotenv";


dotenv.config();


const connectDb=()=>{


    try{

        let sequelize = new Sequelize(
            process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,
            {
                host:process.env.DB_HOST,
                dialect:process.env.DB_DIALECT

            }
        )

        let db={
            models:{}
        }
        db.sequelize=sequelize;
        db.Sequelize=Sequelize;

        
        db.models.Book= Book(sequelize);



        return db;




    }catch(e){

       throw new Error(e);
    }
}


let db= connectDb();

export default db;