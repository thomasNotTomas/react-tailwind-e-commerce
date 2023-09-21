import React from 'react'
import { useTranslation } from 'react-i18next';
import logo from '../../assets/svg/logo.svg'
import PrimaryList from '../navigation/PrimaryList'

export default function Footer() {

  const { t } = useTranslation(["footer"]);

  const aboutList = [t('aboutItem1'), t('aboutItem2'), t('aboutItem3')]
  const promosList = [t('promosItem1'), t('promosItem2')]
  const legalsList = [t('legalsItem1'), t('legalsItem2'), t('legalsItem3'), t('legalsItem4')]

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
          title={t('aboutTitle')}
          items={aboutList}>
        </PrimaryList>
        <PrimaryList 
          title={t('promosTitle')}
          items={promosList}>
        </PrimaryList>
        <PrimaryList
          title={t('legalsTitle')}
          items={legalsList}>
        </PrimaryList>
      </div>
    </footer>
  )
}
