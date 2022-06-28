import React from 'react'
import {Category} from '../interfaces/Category'
import {BsChevronDown} from 'react-icons/bs'
import {useOpenHandler} from '../utils/hooks/useOpenHandler'

export const ThirdLevelItem = (props: Category) => {
  const {isOpen: isChecked, handleOpen: handleChecked} = useOpenHandler()

  return (
    <>
      <div
        className="ml-4 flex items-center justify-between w-100"
        onClick={handleChecked}
      >
        <p className={'font-semibold text-xs'}>
          {props.categoryName}
          <span className={'ml-1 font-light'}>({props.eventsCount})</span>
        </p>
        <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      </div>
    </>
  )
}
