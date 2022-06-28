import React from 'react'
import {Category} from '../interfaces/Category'
import {SecondLeveWrapper} from './SecondLeveWrapper'
import {useOpenHandler} from '../utils/hooks/useOpenHandler'
import {BsChevronDown} from 'react-icons/bs'
import {groupByLevel} from '../utils/filters/groupByLevel'
import {ThirdLevelItem} from './ThirdLevelItem'

interface SecondLevelItemModel extends Category {
  thirdLevelItems: Category[]
}

export const SecondLevelItem = (props: SecondLevelItemModel) => {
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
      {isOpen && (
        <ul>
          {props.thirdLevelItems.map(item => (
            <ThirdLevelItem {...item} />
          ))}
        </ul>
      )}
    </>
  )
}
