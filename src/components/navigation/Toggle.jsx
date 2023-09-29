import React from 'react'
import useToggleClass from '../../utils/hooks/useToggleClass'

export default function Toggle() {

    const { isClassActive, toggleClassState } = useToggleClass(false);

    const handleToggle = () => {
      toggleClassState();
      document.documentElement.classList.toggle('dark', isClassActive);
    };

  return (
    <button className='relative 
                       h-6 w-12 
                       bg-gray-300 hover:bg-gray-400 rounded-2xl
                       transition-all ease-in-out 1000ms'
            onClick={handleToggle}>

        <div className={`absolute
                         h-4 w-4 
                         bg-white rounded-full
                         transition-all ease-in-out 1000ms
                         -translate-y-2
                         ${isClassActive ? 'translate-x-1' : 'translate-x-7'}`}></div>
                         
    </button>
  )
}
