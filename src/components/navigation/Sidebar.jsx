import React from 'react'
import { useTranslation } from 'react-i18next'
import SecondaryList from './SecondaryList'

export default function Sidebar() {

  const { t } = useTranslation(["sidebar"]);

  const genderList = [t('side1Item1'), t('side1Item2')]
  const footwearList = [t('side2Item1'), t('side2Item2'), t('side2Item3')]

  return (
    <div className='hidden md:block space-y-4 w-36 p-4'>
      <SecondaryList
        title={t('sideTitle1')}
        items={genderList}>
      </SecondaryList>
      <SecondaryList
        title={t('sideTitle2')}
        items={footwearList}>
      </SecondaryList>
    </div>
  )
}
