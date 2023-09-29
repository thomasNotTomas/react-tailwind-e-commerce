import React from 'react'
import MobileMenuItem from './MobileMenuItem'
import { Arrow } from '../../assets/svg/Arrow'

export default function MobileSubMenu( {title} ) {
  return (
    <div className='w-screen
                    space-y-4
                    bg-primary-100 dark:bg-secondary-100'>
        <div className='flex items-center space-x-2 px-6'>
            <h2 className='font-bold'> {title} </h2>
        </div>
        <div className='space-y-3 pb-6'>
            <MobileMenuItem title={'SUB CATEGORY 1'}>

            </MobileMenuItem>
            <MobileMenuItem title={'SUB CATEGORY 2'}>

            </MobileMenuItem>
            <MobileMenuItem title={'SUB CATEGORY 3'}>

            </MobileMenuItem>
        </div>
    </div>
  )
}
