import * as React from 'react'
import {Category} from '../interfaces/Category'
import {BsChevronDown} from 'react-icons/bs'
import {findBySport} from '../utils/filters/findBySport'
import {useCategories} from '../context'
import {SecondLeveWrapper} from './SecondLeveWrapper'
import {useOpenHandler} from '../utils/hooks/useOpenHandler'

export const SportItem = ({
  sportId,
  categoryName,
  eventsCount,
  categoryId
}: Category) => {
  const {categories} = useCategories()
  const {isOpen, handleOpen} = useOpenHandler()

  console.log(isOpen)

  if (!sportId && !categories && !categoryId) {
    return <p>Loading...</p>
  }

  const filtered = findBySport(categories, sportId as number)

  return (
    <>
      <li className={'flex flex-col cursor-pointer'}>
        <div
          className="flex items-center justify-between w-100"
          onClick={handleOpen}
        >
          <p className={'font-semibold text-sm'}>
            {categoryName}
            <span className={'ml-1 font-light'}>({eventsCount})</span>
          </p>
          <BsChevronDown
            className={`${isOpen && 'rotate-180'} transition-transform`}
          />
        </div>
        {isOpen && (
          <ul>
            <SecondLeveWrapper items={filtered} />
          </ul>
        )}
      </li>
    </>
  )
}
