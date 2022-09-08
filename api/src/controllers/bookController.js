
import db from "../config/db.js"

import asyncHandler from "express-async-handler"






const getAll=asyncHandler((async(req,res)=>{
     let all = await db.models.Book.findAll();
     res.status(200).json(all);
}))


const deleteBook=(asyncHandler(async(req,res)=>{

     let {id}=req.params;
     let book = await db.models.Book.findByPk(id);


     if(book){

          await book.destroy()
          res.status(204).end();
          
     }else{


          throw new Error("Nu s-a gasit cartea cu id "+id);
     }
}))


const addBook=(asyncHandler(async(req,res)=>{




     let book= await db.models.Book.build(
         
          {
              title:req.body.title,
              author:req.body.author,
              gendre:req.body.gendre,
              year:req.body.year,
          }
       )
  
       await book.save()
  
       res.status(204).end()
    
     // let b={
     //      title:req.body.title,
     //      author:req.body.author,
     //      gendre:req.body.gendre,
     //      year:req.body.year,
     // }

     
     // await db.models.Book.create(b);
}))


const updateBook=(asyncHandler(async(req,res)=>{
     
     let {id}=req.params

    

     let book= await db.models.Book.findByPk(id)

     console.log(book)

     if(book){

          book.set({
               id:id,
               title:req.body.title,
               author:req.body.author,
               gendre:req.body.gendre,
               year:req.body.year,
               
               
          })

          await book.save()
     }
     

     res.status(204).end()
}))


const getById=(asyncHandler(async(req,res)=>{

     let {id}= req.params

     let book= await db.models.Book.findByPk(id)

     res.status(200).json(book)
}))







export {getAll, deleteBook,addBook,updateBook,getById};