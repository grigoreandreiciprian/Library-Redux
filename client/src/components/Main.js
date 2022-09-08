import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import Table from './Table'

export default () => {

  const navigate= useNavigate()

   const toAdd= () =>{

    navigate("/add")
   }

  return (
    <main>


     <Table />
    <div class="buttons">
        <button class="add btn" onClick={toAdd}>Add book</button>
    </div>
    </main>
  )
}
