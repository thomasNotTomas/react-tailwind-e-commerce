import React from 'react'

export default function PrimaryButton( {text, onClick} ) {
  return (
    <button className='bg-white text-black
                       hover:bg-black hover:text-white
                       transition-all ease-in-out 1000ms
                       p-2'
            onClick={onClick}> {text} </button>
  )
}
