import React from 'react'
import useToggleClass from '../../utils/hooks/useToggleClass'

export default function Toggle() {

    const { isClassActive, toggleClassState } = useToggleClass(false)

  return (
    <button className='relative 
                       h-6 w-12 
                       bg-gray-300 hover:bg-gray-400 rounded-2xl
                       transition-all ease-in-out 1000ms'
            onClick={toggleClassState}>

        <div className={`absolute top-1 
                         h-4 w-4 
                         bg-white rounded-full
                         transition-all ease-in-out 1000ms
                         ${isClassActive ? 'right-1' : 'left-1'}`}></div>
                         
    </button>
  )
}
