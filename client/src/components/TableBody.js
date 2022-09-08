import React from 'react'

export default ({books,toUpdate, deleteB}) => {

  return (

    <>
    
    <tr>
        <td>{books.title}</td>
        <td>{books.author}</td>
        <td>{books.gendre}</td>
        <td>{books.year}</td>
        <td> 
            <button class="add btn3" onClick={()=>{
              toUpdate(books.id)
            }}>Update</button>
        </td>

        <td>
        <button class="cancel btn3" onClick={()=>{
          deleteB(books)
        }}>Delete</button>
        </td>
    </tr>

   

    </>

  )
}
