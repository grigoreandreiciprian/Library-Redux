import React from 'react'

import UpdateForm from './UpdateForm'

import { useNavigate, useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import{ updateBook }from "../actions/bookActions"

export default () => {

    let id= useParams().id




    const navigate = useNavigate()

    const [title,setTitle] = useState([])
    
    const [author,setAuthor] = useState([])

    const [gendre,setGendre] = useState([])

    const [year,setYear]= useState([])

    const dispatch= useDispatch()

    const handleChanger = (title,author,gendre,year) =>{

        setTitle(title)
        setAuthor(author)
        setGendre(gendre)
        setYear(year)

    }





    const cancel = () =>{

      navigate("/")
    }

    const bookUpdate= () =>{

       dispatch(updateBook({id,title,author,gendre,year}))

        navigate("/")
    }


    



  return (
    <UpdateForm   cancel={cancel}  handleChanger={handleChanger} updateBook={bookUpdate}/>
  )
}
