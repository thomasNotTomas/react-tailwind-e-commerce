import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Searchbar() {

    const { t } = useTranslation(["navbar"]);

  return (
    <div className='w-full flex justify-end 
                    md:bg-primary-100 md:dark:bg-secondary-100 md:p-4'>
        <input className='w-full md:max-w-xs lg:max-w-sm xl:max-w-lg px-4 py-2
                          md:outline
                          text-gray-500
                          bg-primary-100 dark:bg-secondary-100
                          focus:outline-none' 
                type="text"
                placeholder={t('searchPlaceHolder')} />
    </div>
  )
}
