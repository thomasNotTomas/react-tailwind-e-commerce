import React from 'react'
import MobileMenuItem from './MobileMenuItem'

export default function MobileSubMenu( {title, icon, sub1, sub2, sub3} ) {
  return (
    <div className='w-screen
                    space-y-4
                    bg-primary-100 dark:bg-secondary-100'>
        <div className='flex items-center 
                        space-x-2 px-6'>
            {icon && (
              <div className='w-6 h-6 rounded-full'>
              {icon}
              </div>
            )}
            <h2 className='font-bold'> {title} </h2>
        </div>
        <div className='space-y-3 pb-6'>
            <MobileMenuItem title={sub1}>

            </MobileMenuItem>
            <MobileMenuItem title={sub2}>

            </MobileMenuItem>
            <MobileMenuItem title={sub3}>

            </MobileMenuItem>
        </div>
    </div>
  )
}
