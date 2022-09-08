import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { addBook } from '../actions/bookActions'

import AddForm from './AddForm'

export default () => 
{

    const navigate = useNavigate()

    const [title,setTitle] = useState([])
    
    const [author,setAuthor] = useState([])

    const [gendre,setGendre] = useState([])

    const [year,setYear]= useState([])

    const dispatch= useDispatch()



    const bookAdd= () =>{

        dispatch(addBook({title,author,gendre,year}))

        navigate("/")
    }




    const handleChanger = (title,author,gendre,year) =>{

        setTitle(title)
        setAuthor(author)
        setGendre(gendre)
        setYear(year)

    }

    const cancel = () =>{

      navigate("/")
    }


  return (
    <main>
        
        <AddForm  handleChanger={handleChanger} bookAdd={bookAdd} cancel={cancel}/>

  </main>
  )
}
