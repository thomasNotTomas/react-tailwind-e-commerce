import React from 'react'
import SecondaryButton from './SecondaryButton'

export default function SecondaryBanner( {children, title, paragraph, button} ) {
  return (
    <div className='flex flex-col items-center text-center space-y-4'>
        <div className='w-24'>
            {children}
        </div>
        <div className='space-y-6'>
            <h1 className='text-2xl font-bold'> {title} </h1>
            <p className='max-w-[16rem] '> {paragraph} </p>
            <SecondaryButton text={button}></SecondaryButton>
        </div>
    </div>
  )
}
