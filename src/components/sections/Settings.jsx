import React from 'react'
import { LightModeIcon } from '../../assets/svg/LightModeIcon'
import { DarkModeIcon } from '../../assets/svg/DarkModeIcon'
import ModeToggle from '../navigation/ModeToggle'

export default function Settings() {

  return (
    <div className='bg-primary-100 dark:bg-secondary-100
                    flex space-x-8 
                    w-full px-6 py-4 
                    text-center'>

      {/* Dark/Light Mode  */}

      <section className='flex space-x-2 items-center'>

        <LightModeIcon></LightModeIcon>
        
        <ModeToggle></ModeToggle>

        <DarkModeIcon></DarkModeIcon>
      </section>

      <section className='flex items-center w-8 space-x-2'>
        <select className='p-2 rounded-md bg-gray-200 dark:bg-gray-400' name="" id="">
          <option value="">🇬🇧 English</option>
          <option value="">🇪🇸 Español</option>
        </select>
      </section>

      {/* Language */}

  
    </div>
  )
}
