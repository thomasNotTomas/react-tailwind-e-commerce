import React from 'react'
import { useTranslation } from 'react-i18next'
import MainBanner from '../navigation/MainBanner'
import PrimaryButton from '../navigation/PrimaryButton'

export default function Landing() {

  const { t } = useTranslation(["landing"]);

  return (
    <div className='w-full space-y-2'>

      <MainBanner
      title={t('b1title')}
      subtitle={t('b1subtitle')}
      background={'bg-gray-100'}> 
        <PrimaryButton text={t('b1btn1')} ></PrimaryButton>
        <PrimaryButton text={t('b1btn2')} ></PrimaryButton>
      </MainBanner>

      <MainBanner
      title={t('b2title')}
      subtitle={t('b2subtitle')}
      background={'bg-gray-200'}>
        <PrimaryButton text={t('b2btn1')} ></PrimaryButton>
        <PrimaryButton text={t('b2btn2')} ></PrimaryButton>
      </MainBanner>

      <MainBanner
      title={t('b3title')}
      subtitle={t('b3subtitle')}
      background={'bg-gray-300'}>
        <PrimaryButton text={t('b3btn1')} ></PrimaryButton>
        <PrimaryButton text={t('b3btn2')} ></PrimaryButton>
      </MainBanner>
      
    </div>
  )
}
