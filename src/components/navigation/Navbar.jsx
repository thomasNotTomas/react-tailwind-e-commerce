import React from 'react'
import { useTranslation } from 'react-i18next'
import useToggleClass from '../../utils/hooks/useToggleClass'
import { DesktopLogo } from '../../assets/svg/DesktopLogo'
import NavItem from './NavItem'
import MobileMenu from './MobileMenu'
import Settings from '../sections/Settings'
import { SettingsIcon } from '../../assets/svg/SettingsIcon'
import Searchbar from './Searchbar'
import { SearchIcon } from '../../assets/svg/SearchIcon'

export default function Navbar() {

  const { t } = useTranslation(["navbar"]);

  const { isClassActive: isMobileMenuActive, toggleClassState: toggleMobileMenuState } = useToggleClass(false);

  const { isClassActive: isSettingsActive, toggleClassState: toggleSettingsState } = useToggleClass(false);

  const { isClassActive: isSearchActive, toggleClassState: toggleSearchState } = useToggleClass(false);

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
          <div className='space-x-4'
               onClick={toggleMobileMenuState}>
            <NavItem text={t('navItem1')}></NavItem>
          </div>
        </div>
        {/* Right Side */}
        <div className='space-x-8'>
          <button onClick={toggleSearchState}>
            <SearchIcon></SearchIcon>
          </button>

          <button onClick={toggleSettingsState}>
            <SettingsIcon>
            </SettingsIcon>
          </button>
        </div>
      </nav>

      <div className={`absolute z-30 w-full
                      md:hidden
                      transition-all ease-in-out duration-500 transform
                      ${isMobileMenuActive ? 'translate-y-0' : '-translate-y-full'}`}>
        <MobileMenu></MobileMenu>
      </div>

      <div className={` absolute z-40 w-full
                        transition-all ease-in-out duration-500 transform
                        ${isSettingsActive ? 'translate-y-0' : '-translate-y-full'}`}>
        <Settings></Settings>
      </div>

      <div className={` absolute z-40 w-full 
                        transition-all ease-in-out duration-500 transform
                        ${isSearchActive ? 'translate-y-0' : '-translate-y-full' } `}>
        <Searchbar></Searchbar>
      </div>
    </div>
  )
}
