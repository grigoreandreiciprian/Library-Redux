import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../actions/bookActions';

export default () => {

  const [bookss,setBooks] = useState([])

    const dispatch= useDispatch();

    const bookList = useSelector (state=> state.bookList);

    const {loading,error,books}= bookList;

    


  return (
    <header>
    <nav>
        <div class="logo">
            <h1>Book Library</h1>
            <h2>Total books: {books.length}</h2>
        </div>
        <div class="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Books</a>
            <a href="#">Contact</a>
        </div>
    </nav>
</header>
  )
}
