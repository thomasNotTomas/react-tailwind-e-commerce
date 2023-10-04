import React from 'react'

export default function PrimaryList( {title, items} ) {
  return (
    <div className='space-y-2'>
        <h3 className='text-lg font-bold'> {title} </h3>
        <ul className='space-y-1'>
            {items.map((item, index) => (
                <li key={index}
                    className='text-sm'> 
                      {item} 
                </li>
            ))}
        </ul>
    </div>
  )
}
