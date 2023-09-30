import React from 'react'
import MobileMenuItem from './MobileMenuItem'
import MobileSubMenu from './MobileSubMenu'
import useToggleClass from '../../utils/hooks/useToggleClass'
import { useTranslation } from 'react-i18next'
import { Arrow } from '../../assets/svg/Arrow'
import mainIcon from '../../assets/svg/mainIcon.svg'
import shoesIcon from '../../assets/svg/shoesIcon.svg'
import shirtIcon from '../../assets/svg/shirtIcon.svg'
import bottomsIcon from '../../assets/svg/bottomsIcon.svg'

export default function MobileMenu() {

    const { t } = useTranslation(["categories"]);

    const { isClassActive: isCategory1Active, toggleClassState: toggleCategory1 } = useToggleClass(false);
    const { isClassActive: isCategory2Active, toggleClassState: toggleCategory2 } = useToggleClass(false);
    const { isClassActive: isCategory3Active, toggleClassState: toggleCategory3 } = useToggleClass(false);
    const { isClassActive: isCategory4Active, toggleClassState: toggleCategory4 } = useToggleClass(false);

  return (
    <div className='w-full
                    relative
                    bg-primary-100 dark:bg-secondary-100'> 
                    
                    <div className='space-y-3 pb-6'>

                    {/* CATEGORIES */}

                    <div className='w-full'
                            onClick={toggleCategory1}>
                    <MobileMenuItem title={t('category1')}>

                    </MobileMenuItem>
                    </div>

                    <div className='w-full'
                            onClick={toggleCategory2}>
                    <MobileMenuItem title={t('category2')}> 

                    </MobileMenuItem>
                    </div>

                    <div className='w-full'
                            onClick={toggleCategory3}>
                    <MobileMenuItem title={t('category3')}> 

                    </MobileMenuItem>
                    </div>

                    <div className='w-full'
                            onClick={toggleCategory4}>
                    <MobileMenuItem title={t('category4')}> 

                    </MobileMenuItem>
                    </div>
                    </div>

                    {/* SUB CATEGORIES */}

                    <div className={`absolute
                                    -translate-y-full
                                    bg-primary-100 dark:bg-secondary-100  
                                     ${isCategory1Active ? '' : '-translate-x-full'}
                                    transition-all ease-in-out 1000ms`}>
                        <button className={`absolute rotate-180 px-4 w-screen`}
                                onClick={toggleCategory1}>
                            <Arrow></Arrow>
                        </button>
                        <MobileSubMenu title={t('category1')} 
                                       icon={ <img src={mainIcon} /> }
                                       sub1={t('category1sub1')}
                                       sub2={t('category1sub2')}
                                       sub3={t('category1sub3')}></MobileSubMenu>
                    </div>

                    <div className={`absolute
                                    -translate-y-full
                                    bg-primary-100 dark:bg-secondary-100  
                                     ${isCategory2Active ? '' : '-translate-x-full'}
                                    transition-all ease-in-out 1000ms`}>
                        <button className={`absolute rotate-180 px-4 w-screen`}
                                onClick={toggleCategory2}>
                            <Arrow></Arrow>
                        </button>
                        <MobileSubMenu title={t('category2')} 
                                       icon={ <img src={shoesIcon} /> }
                                       sub1={t('category2sub1')}
                                       sub2={t('category2sub2')}
                                       sub3={t('category2sub3')}></MobileSubMenu>
                    </div>

                    <div className={`absolute
                                    -translate-y-full
                                    bg-primary-100 dark:bg-secondary-100  
                                     ${isCategory3Active ? '' : '-translate-x-full'}
                                    transition-all ease-in-out 1000ms`}>
                        <button className={`absolute rotate-180 px-4 w-screen`}
                                onClick={toggleCategory3}>
                            <Arrow></Arrow>
                        </button>
                        <MobileSubMenu title={t('category3')} 
                                       icon={ <img src={shirtIcon} /> }
                                       sub1={t('category3sub1')}
                                       sub2={t('category3sub2')}
                                       sub3={t('category3sub3')}></MobileSubMenu>
                    </div>

                    <div className={`absolute
                                    -translate-y-full
                                    bg-primary-100 dark:bg-secondary-100  
                                     ${isCategory4Active ? '' : '-translate-x-full'}
                                    transition-all ease-in-out 1000ms`}>
                        <button className={`absolute rotate-180 px-4 w-screen`}
                                onClick={toggleCategory4}>
                            <Arrow></Arrow>
                        </button>
                        <MobileSubMenu title={t('category4')} 
                                       icon={ <img className='p-1' src={bottomsIcon} /> }
                                       sub1={t('category4sub1')}
                                       sub2={t('category4sub2')}
                                       sub3={t('category4sub3')}></MobileSubMenu>
                    </div>

                    </div>
  )
}
