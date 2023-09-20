import React from 'react'

export default function PrimaryButton( {text} ) {
  return (
    <button className='bg-white text-black
                       hover:bg-black hover:text-white
                       transition-all ease-in-out 1000ms
                       p-2'> {text} </button>
  )
}
