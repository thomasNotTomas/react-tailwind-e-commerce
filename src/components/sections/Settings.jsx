import React from 'react'
import i18n from "i18next";
import { LightModeIcon } from '../../assets/svg/LightModeIcon'
import { DarkModeIcon } from '../../assets/svg/DarkModeIcon'
import ModeToggle from '../navigation/ModeToggle'

export default function Settings() {

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className='bg-primary-100 dark:bg-secondary-100
                    flex text-center 
                    w-full space-x-8 px-6 py-4 '>

      {/* Dark/Light Mode  */}

      <section className='flex items-center
                          space-x-2'>

        <LightModeIcon></LightModeIcon>
        
        <ModeToggle></ModeToggle>

        <DarkModeIcon></DarkModeIcon>
      </section>

      <section className='flex items-center 
                          w-8 space-x-2'>
        <select onChange={changeLanguage}
                value={i18n.language}
                className='p-2
                           rounded-md bg-gray-200 dark:bg-gray-400' 
                name="Language Selection">
          <option value="en">🇬🇧 English</option>
          <option value="es">🇪🇸 Español</option>
        </select>
      </section>

      {/* Language */}

  
    </div>
  )
}
