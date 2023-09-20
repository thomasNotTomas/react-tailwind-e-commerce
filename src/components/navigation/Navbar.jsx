import React from 'react'
import logo from '../../assets/svg/logo.svg'
import NavItem from './NavItem'

export default function Navbar() {
  return (
    <nav className='flex items-center space-x-8 px-4'>
      <img 
        src={logo} 
        alt="Placeholder logo" 
        className='h-16'
      />
      <div className='space-x-4'>
        <NavItem text={'ITEM 1'}></NavItem>
        <NavItem text={'ITEM 2'}></NavItem>
      </div>
    </nav>
  )
}
