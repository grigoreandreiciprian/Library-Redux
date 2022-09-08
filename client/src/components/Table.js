import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, getBooks } from '../actions/bookActions';

import { useNavigate } from 'react-router-dom';

import TableBody from './TableBody'

export default function Table() {

    const [newBooks,setNew] = useState([])
    const navigate = useNavigate()

    const dispatch= useDispatch();

    const bookList = useSelector (state=> state.bookList);

    const {loading,error,books}= bookList;

    useEffect(()=>{
      

        if(books.length==0){

            dispatch(getBooks());

            console.log(books);   
        }


    },[dispatch])


    const toUpdate = (id) =>{

        navigate(`update/${id}`)
    }

    const deleteB= (book) =>{

        dispatch(deleteBook(book))

        dispatch(getBooks())

        setNew(books)
    
         navigate("/")
     }

     useEffect(()=>{

     },[newBooks])

   
    

   

  return (
    <div class="table">
    <h1>Here is our fine selection of books</h1>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Gendre</th>
                <th>Year</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            {
                books.length>0?(
                    books.map(e =>{
                        return ( <TableBody  books={e} toUpdate={toUpdate}  deleteB={deleteB}/>)
                    })
                )
                :
                <p>We dont have books</p>
            }
            
        </tbody>        
    </table>
</div>
  )
}
