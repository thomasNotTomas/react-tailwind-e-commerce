import React from 'react'
import logo from '../../assets/svg/logo.svg'
import PrimaryList from '../navigation/PrimaryList'

export default function Footer() {

  const aboutList = ['Who We Are', 'Contact', 'Find Stores']
  const promosList = ['Gift Cards', 'Discounts']
  const legalsList = ['Cookie Policy', 'Privacy Policy', 'Terms & Conditions', 'Refunds']

  return (
    <footer className='flex flex-col
                       md:flex-row md:justify-between 
                       p-8 m-auto max-w-3xl'>
      <img
        className='h-16 md:h-24' 
        src={logo} 
        alt="" />

      <div className='flex justify-center space-x-8'>
        <PrimaryList 
          title={'About'}
          items={aboutList}>
        </PrimaryList>
        <PrimaryList 
          title={'Promos'}
          items={promosList}>
        </PrimaryList>
        <PrimaryList
          title={'Legals'}
          items={legalsList}>
        </PrimaryList>
      </div>
    </footer>
  )
}
