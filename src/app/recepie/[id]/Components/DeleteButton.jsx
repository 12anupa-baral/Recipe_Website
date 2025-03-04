'use client'
import React from 'react'


const DeleteButton = ({recipeId}) => {
    const deleteRecipe =async ()=>{
 const respone=   await  fetch('/api/getRecipe/'+recipeId,{
            method: 'DELETE',
        })
        if(!respone.ok){
          throw new Error("Smth went wrong") 
        }
        alert("Recipe delete successfully!")
    }
  return (
    <div className="w-1/2 px-2">
    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
    onClick={deleteRecipe}>
      Delete
    </button>
  </div>
  )
}

export default DeleteButton