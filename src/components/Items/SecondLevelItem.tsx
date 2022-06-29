import React from 'react'
import {Category} from '../../utils/interfaces/Category'
import {useOpenHandler} from '../../utils/hooks/useOpenHandler'
import {BsChevronDown} from 'react-icons/bs'
import {ThirdLevelWrapper} from '../Wrappers/ThirdLevelWrapper'

export const SecondLevelItem = (props: Category) => {
  const {isOpen, handleOpen} = useOpenHandler()

  return (
    <>
      <div
        className="flex items-center justify-between w-100"
        onClick={handleOpen}
      >
        <p className={'font-semibold text-xs'}>
          {props.categoryName}
          <span className={'ml-1 font-light'}>({props.eventsCount})</span>
        </p>
        <BsChevronDown
          className={`${isOpen && 'rotate-180'} transition-transform`}
        />
      </div>
      {isOpen && <ThirdLevelWrapper categoryId={props.categoryId} />}
    </>
  )
}
