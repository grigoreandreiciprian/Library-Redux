import React from 'react'

import { useState, useEffect } from 'react'

export default ({handleChanger,cancel,updateBook}) => {

    const [title,setTitle] = useState([])
    
    const [author,setAuthor] = useState([])

    const [gendre,setGendre] = useState([])

    const [year,setYear]= useState([])


    const onChange = (e) => {

        let obj= e.target

        if(obj.classList.contains("title")){
            
            setTitle(obj.value)
        }else if(obj.classList.contains("author")){

            setAuthor(obj.value)
        }else if(obj.classList.contains("gendre")){

            setGendre(obj.value)
        }else if(obj.classList.contains("year")){

            setYear(obj.value)
        }


      
    }

    useEffect(()=>{

        handleChanger(title,author,gendre,year)

    },[onChange])

  return (
    
    <div class="form"  onChange={onChange}>
          <h1>Update the book</h1>

          <div class="inputs">
              <label for="title">Title</label>
              <input type="text" class="title"></input>
          </div>

          <div class="inputs">
            <label for="author">Author</label>
            <input type="text" class="author"></input>
        </div>


        <div class="inputs">
            <label for="gendre">Gendre</label>
            <input type="text" class="gendre"></input>
        </div>

        <div class="inputs">
            <label for="year">Year</label>
            <input type="number" class="year"></input>
        </div>

        <div class="buttons2">
            <button class="add btn2" onClick={updateBook}>Update book</button>
            <button class="cancel btn2" onClick={cancel}>Cancel</button>
        </div>
     </div>
  )
}
