import React from 'react'
import MainBanner from '../navigation/MainBanner'
import PrimaryButton from '../navigation/PrimaryButton'

export default function Landing() {
  return (
    <div className='w-full space-y-2'>

      <MainBanner
      title={'Title 1'}
      subtitle={'Subtitle 1'}
      background={'bg-gray-100'}> 
        <PrimaryButton text={'BUTTON 1'} ></PrimaryButton>
        <PrimaryButton text={'BUTTON 2'} ></PrimaryButton>
      </MainBanner>

      <MainBanner
      title={'Title 2'}
      subtitle={'Subtitle 2'}
      background={'bg-gray-200'}>
        <PrimaryButton text={'BUTTON 1'} ></PrimaryButton>
        <PrimaryButton text={'BUTTON 2'} ></PrimaryButton>
      </MainBanner>

      <MainBanner
      title={'Title 3'}
      subtitle={'Subtitle 3'}
      background={'bg-gray-300'}>
        <PrimaryButton text={'BUTTON 1'} ></PrimaryButton>
        <PrimaryButton text={'BUTTON 2'} ></PrimaryButton>
      </MainBanner>
      
    </div>
  )
}
