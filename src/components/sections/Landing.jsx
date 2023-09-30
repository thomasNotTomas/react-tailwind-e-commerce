import React from 'react'
import { useTranslation } from 'react-i18next'
import PrimaryBanner from '../navigation/PrimaryBanner'
import PrimaryButton from '../navigation/PrimaryButton'
import SecondaryBanner from '../navigation/SecondaryBanner'

export default function Landing() {

  const { t } = useTranslation(["landing"]);

  return (
    <div className='w-full space-y-2'>

      <div className='space-y-2 
                      xl:flex xl:space-y-0 xl:space-x-2'>
      <PrimaryBanner
      title={t('b1title')}
      subtitle={t('b1subtitle')}
      background={"bg-[url(https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)]"}
      bgposition={'bg-bottom'}> 
        <PrimaryButton text={t('b1btn1')} ></PrimaryButton>
        <PrimaryButton text={t('b1btn2')} ></PrimaryButton>
      </PrimaryBanner>

      <PrimaryBanner
      title={t('b2title')}
      subtitle={t('b2subtitle')}
      background={'bg-[url(https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)]'}
      bgposition={'bg-cover'}>
        <PrimaryButton text={t('b2btn1')} ></PrimaryButton>
      </PrimaryBanner>
      </div>

      <div className='space-y-2 
                      xl:flex xl:space-y-0 xl:space-x-2'>
      <PrimaryBanner
      title={t('b3title')}
      subtitle={t('b3subtitle')}
      background={'bg-[url(https://images.unsplash.com/photo-1544698310-74ea9d1c8258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80)]'}
      bgposition={'bg-cover'}>
        <PrimaryButton text={t('b3btn1')} ></PrimaryButton>
        <PrimaryButton text={t('b3btn2')} ></PrimaryButton>
      </PrimaryBanner>

      <PrimaryBanner
        title={t('b4title')}
        subtitle={t('b4subtitle')}
        background={'bg-[url(https://images.unsplash.com/photo-1569531955323-33c6b2dca44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60)]'}
        bgposition={'bg-center'}>
        <PrimaryButton text={t('b4btn1')}></PrimaryButton>
      </PrimaryBanner>
      </div>

      <div className='flex flex-col justify-between 
                      max-w-5xl space-y-24 p-8 py-32 m-auto
                      lg:flex-row lg:space-y-0 lg:max-w-7xl'>
        <SecondaryBanner
          title={t('infoB1title')}
          paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.'}
          button={t('infoB1btn')}>
          <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </SecondaryBanner>

        <SecondaryBanner
          title={t('infoB2title')}
          paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.'}
          button={t('infoB2btn')}>
          <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </SecondaryBanner>

        <SecondaryBanner
          title={t('infoB3title')}
          paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.'}
          button={t('infoB3btn')}>
          <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </SecondaryBanner>
      </div>
      
    </div>
  )
}
