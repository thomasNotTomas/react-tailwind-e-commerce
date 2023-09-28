import React from 'react'
import { useTranslation } from 'react-i18next'
import SecondaryList from './SecondaryList'
import { Arrow } from '../../assets/svg/Arrow';
import useToggleClass from '../../utils/hooks/useToggleClass';

export default function Sidebar() {

  const { t } = useTranslation(["sidebar"]);

  const { isClassActive, toggleClassState } = useToggleClass(false);

  const genderList = [t('side1Item1'), t('side1Item2')]
  const footwearList = [t('side2Item1'), t('side2Item2'), t('side2Item3')]

  return (
    <div className={`hidden md:block transition-all ease-in-out 300ms ${isClassActive ? 'w-32' : 'w-12' } space-y-2 p-4`}>
      <button className={`transition-all ease-in-out 1000ms ${isClassActive ? 'rotate-180' : ''}`} onClick={toggleClassState}>
      <Arrow>
      </Arrow>
      </button>
      <div className={`space-y-4 w-32 transition-all ease-in-out 300ms ${isClassActive ? 'translate-x-0' : '-translate-x-24' } `}>
        <SecondaryList
          title={t('sideTitle1')}
          items={genderList}>
        </SecondaryList>

        <SecondaryList
          title={t('sideTitle2')}
          items={footwearList}>
        </SecondaryList>
      </div>
    </div>
  )
}
