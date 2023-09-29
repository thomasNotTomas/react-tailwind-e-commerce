import React from 'react'
import { useState } from 'react'
import { LightModeIcon } from '../../assets/svg/LightModeIcon'
import { DarkModeIcon } from '../../assets/svg/DarkModeIcon'
import Toggle from '../navigation/Toggle'

export default function Settings() {

  return (
    <div className='bg-primary-100 dark:bg-secondary-100
                    flex space-x-8 
                    w-full px-6 py-4 
                    text-center'>

      {/* Dark/Light Mode  */}

      <section className='flex space-x-2 items-center'>
        <LightModeIcon></LightModeIcon>

        <Toggle></Toggle>

        <DarkModeIcon></DarkModeIcon>
      </section>

      {/* Language */}

  
    </div>
  )
}
