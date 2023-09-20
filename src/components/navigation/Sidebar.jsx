import React from 'react'
import SecondaryList from './SecondaryList'

export default function Sidebar() {

  const genderList = ['MEN', 'WOMEN']
  const footwearList = ['SHOES', 'BOOTS', 'SNEAKERS']

  return (
    <div className='hidden md:block space-y-4 w-36 p-4'>
      <SecondaryList
        title={'GENDER'}
        items={genderList}>
      </SecondaryList>
      <SecondaryList
        title={'FOOTWEAR'}
        items={footwearList}>
      </SecondaryList>
    </div>
  )
}
