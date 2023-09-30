import React from 'react'
import { Arrow } from '../../assets/svg/Arrow'
import useToggleClass from '../../utils/hooks/useToggleClass'

export default function MobileMenuItem( {title} ) {

    const { toggleClassState } = useToggleClass(false);

  return (
    <div className='px-4 font-semibold '>
        <div className='flex items-center justify-between cursor-pointer'>
            <div className='py-2'>
                <h2 className='px-2'> {title} </h2>
            </div>
            <button className={`transition-all ease-in-out 300ms`}
                    onClick={toggleClassState}>
                <Arrow></Arrow>
            </button>
        </div>
        <div className='h-px w-full 
                        bg-secondary-100 dark:bg-primary-100'></div>
    </div>
  )
}
