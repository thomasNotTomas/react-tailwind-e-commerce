import React from 'react'

export default function SecondaryList( { items, icon } ) {
  return (
    <div className='space-y-2'>
        {icon && (
              <div className='w-6 h-6 rounded-full'>
              {icon}
              </div>
        )}
        <ul>
            {items.map((item, index ) => (
                <li 
                    className='text-sm font-semibold cursor-pointer'
                    key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}
