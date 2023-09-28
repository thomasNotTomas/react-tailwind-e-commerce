import React from 'react'
import { useTranslation } from 'react-i18next'
import MainBanner from '../navigation/MainBanner'
import PrimaryButton from '../navigation/PrimaryButton'

export default function Landing() {

  const { t } = useTranslation(["landing"]);

  return (
    <div className='w-full space-y-2'>

      <div className='space-y-2 
                      xl:flex xl:space-y-0 xl:space-x-2'>
      <MainBanner
      title={t('b1title')}
      subtitle={t('b1subtitle')}
      background={"bg-[url(https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)]"}
      bgposition={'bg-bottom'}> 
        <PrimaryButton text={t('b1btn1')} ></PrimaryButton>
        <PrimaryButton text={t('b1btn2')} ></PrimaryButton>
      </MainBanner>

      <MainBanner
      title={t('b2title')}
      subtitle={t('b2subtitle')}
      background={'bg-[url(https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)]'}
      bgposition={'bg-cover'}>
        <PrimaryButton text={t('b2btn1')} ></PrimaryButton>
      </MainBanner>
      </div>

      <div className='space-y-2 
                      xl:flex xl:space-y-0 xl:space-x-2'>
      <MainBanner
      title={t('b3title')}
      subtitle={t('b3subtitle')}
      background={'bg-[url(https://images.unsplash.com/photo-1544698310-74ea9d1c8258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80)]'}
      bgposition={'bg-cover'}>
        <PrimaryButton text={t('b3btn1')} ></PrimaryButton>
        <PrimaryButton text={t('b3btn2')} ></PrimaryButton>
      </MainBanner>

      <MainBanner
        title={t('b4title')}
        subtitle={t('b4subtitle')}
        background={'bg-[url(https://images.unsplash.com/photo-1569531955323-33c6b2dca44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60)]'}
        bgposition={'bg-center'}>
        <PrimaryButton text={t('b4btn1')}></PrimaryButton>
      </MainBanner>
      </div>
      
    </div>
  )
}
