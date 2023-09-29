import React from 'react'

export default function MainBanner( {children, title, subtitle, background, bgposition} ) {
  return (
    <div className={`p-4 md:p-8 w-full bg-cover text-primary-100 ${background} ${bgposition}`}>
        <div className='space-y-32'>
            <div className='space-y-2 drop-shadow-md'>
                <h1 className='text-3xl font-bold'> {title} </h1>
                <h2 className='text-base'> {subtitle} </h2>
            </div>
            <div className='flex space-x-4'>
                {children}
            </div>
        </div>
    </div>
  )
}
