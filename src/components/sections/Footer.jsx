import React from 'react'
import { useTranslation } from 'react-i18next';
import logo from '../../assets/svg/logo.svg'
import PrimaryList from '../navigation/PrimaryList'
import { DesktopLogo } from '../../assets/svg/DesktopLogo';

export default function Footer() {

  const { t } = useTranslation(["footer"]);

  const aboutList = [t('aboutItem1'), t('aboutItem2'), t('aboutItem3')]
  const promosList = [t('promosItem1'), t('promosItem2')]
  const legalsList = [t('legalsItem1'), t('legalsItem2'), t('legalsItem3'), t('legalsItem4')]

  return (
    <footer className='flex flex-col
                       md:flex-row md:justify-between 
                       p-8 space-y-8 m-auto max-w-3xl'>

      <DesktopLogo></DesktopLogo>

      <div className='flex justify-center 
                      space-x-8'>
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
