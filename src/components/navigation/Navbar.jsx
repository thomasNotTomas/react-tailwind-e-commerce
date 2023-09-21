import React from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/svg/logo.svg'
import NavItem from './NavItem'

export default function Navbar() {

  const { t } = useTranslation(["navbar"]);

  return (
    <nav className='flex items-center space-x-8 px-4'>
      <img 
        src={logo} 
        alt="Placeholder logo" 
        className='h-16'
      />
      <div className='space-x-4'>
        <NavItem text={t('navItem1')}></NavItem>
        <NavItem text={t('navItem2')}></NavItem>
      </div>
    </nav>
  )
}
