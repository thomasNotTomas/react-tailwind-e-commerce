import React from 'react'

export default function SecondaryList( {title, items} ) {
  return (
    <div className='space-y-2'>
        <h2 className='font-bold'> {title} </h2>
        <ul>
            {items.map((item, index ) => (
                <li 
                    className='text-sm'
                    key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}
