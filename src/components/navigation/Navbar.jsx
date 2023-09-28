import React from 'react'
import { useTranslation } from 'react-i18next'
import useToggleClass from '../../utils/hooks/useToggleClass'
import { DesktopLogo } from '../../assets/svg/DesktopLogo'
import NavItem from './NavItem'
import Settings from '../sections/Settings'
import { SettingsIcon } from '../../assets/svg/SettingsIcon'

export default function Navbar() {

  const { t } = useTranslation(["navbar"]);

  const { isClassActive, toggleClassState } = useToggleClass(false);

  return (
    <div className='w-full h-auto
                    relative
                    '>

      <nav className='flex justify-between items-center 
                      relative z-50
                      px-4 py-4
                      bg-primary-100
                      dark:bg-secondary-100'>
        {/* Left Side */}
        <div className='flex items-center space-x-8'>
          <DesktopLogo></DesktopLogo>
          <div className='space-x-4'>
            <NavItem text={t('navItem1')}></NavItem>
          </div>
        </div>
        {/* Right Side */}
        <button onClick={toggleClassState}>
          <SettingsIcon>
          </SettingsIcon>
        </button>
      </nav>

      <div className={` absolute z-40 w-full
                        transition-all ease-in-out duration-500 transform
                        ${isClassActive ? 'translate-y-0' : '-translate-y-full'}`}>
        <Settings></Settings>
      </div>
    </div>
  )
}
