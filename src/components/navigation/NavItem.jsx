import React from 'react'
import { Arrow } from '../../assets/svg/Arrow'
import useToggleClass from '../../utils/hooks/useToggleClass'

export default function NavItem( {text} ) {

  const { isClassActive, toggleClassState } = useToggleClass(false);

  return (
    <button className='text-base font-semibold 
                       flex items-center
                       space-x-2'
            onClick={toggleClassState}>

        <h3> {text} </h3>

        <div className={`md:hidden
                            transition-all ease-in-out 1000ms
                            ${isClassActive ? '-rotate-90' : 'rotate-90'}`}>
          <Arrow></Arrow>
        </div>

    </button>
  )
}
