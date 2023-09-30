import React from 'react'
import { useTranslation } from 'react-i18next'
import SecondaryList from './SecondaryList'
import { Arrow } from '../../assets/svg/Arrow';
import useToggleClass from '../../utils/hooks/useToggleClass';
import mainIcon from '../../assets/svg/mainIcon.svg'
import shoesIcon from '../../assets/svg/shoesIcon.svg'
import shirtIcon from '../../assets/svg/shirtIcon.svg'
import bottomsIcon from '../../assets/svg/bottomsIcon.svg'

export default function Sidebar() {

  const { t } = useTranslation(["categories"]);

  const { isClassActive, toggleClassState } = useToggleClass(false);

  const findList = [t('category1sub1'), t('category1sub2'), t('category1sub3')]
  const footwearList = [t('category2sub1'), t('category2sub2'), t('category2sub3')]
  const topsList = [t('category3sub1'), t('category3sub2'), t('category3sub3')]
  const bottomsList = [t('category4sub1'), t('category4sub2'), t('category4sub3')]

  return (
    <div className={`hidden md:block
                     space-y-2 p-4 
                     transition-all ease-in-out 300ms 
                     ${isClassActive ? 'w-32' : 'w-12' }`}>

      <button className={`transition-all ease-in-out 1000ms 
                         ${isClassActive ? 'rotate-180' : ''}`} 
              onClick={toggleClassState}>
      <Arrow>
      </Arrow>
      </button>

      <div className={`space-y-4 w-32 
                       transition-all ease-in-out 300ms 
                       ${isClassActive ? 'translate-x-0' : '-translate-x-24' } `}>
        <SecondaryList
          icon={ <img src={mainIcon} /> }
          items={findList}>
        </SecondaryList>

        <SecondaryList
          icon={ <img src={shoesIcon} /> }
          items={footwearList}>
        </SecondaryList>

        <SecondaryList
          icon={ <img src={shirtIcon} /> }
          items={topsList}>
        </SecondaryList>

        <SecondaryList
          icon={ <img className='p-1' src={bottomsIcon} /> }
          items={bottomsList}>
        </SecondaryList>
      </div>
    </div>
  )
}
