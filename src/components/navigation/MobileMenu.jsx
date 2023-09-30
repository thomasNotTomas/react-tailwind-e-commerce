import React from 'react'
import MobileMenuItem from './MobileMenuItem'
import MobileSubMenu from './MobileSubMenu'
import useToggleClass from '../../utils/hooks/useToggleClass'
import { Arrow } from '../../assets/svg/Arrow'

export default function MobileMenu() {

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
                    <MobileMenuItem title={'CATEGORY 1'}>

                    </MobileMenuItem>
                    </div>

                    <div className='w-full'
                            onClick={toggleCategory2}>
                    <MobileMenuItem title={'CATEGORY 2'}> 

                    </MobileMenuItem>
                    </div>

                    <div className='w-full'
                            onClick={toggleCategory3}>
                    <MobileMenuItem title={'CATEGORY 3'}> 

                    </MobileMenuItem>
                    </div>

                    <div className='w-full'
                            onClick={toggleCategory4}>
                    <MobileMenuItem title={'CATEGORY 4'}> 

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
                        <MobileSubMenu title={'CATEGORY 1'} ></MobileSubMenu>
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
                        <MobileSubMenu title={'CATEGORY 2'} ></MobileSubMenu>
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
                        <MobileSubMenu title={'CATEGORY 3'} ></MobileSubMenu>
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
                        <MobileSubMenu title={'CATEGORY 4'} ></MobileSubMenu>
                    </div>

                    </div>
  )
}
