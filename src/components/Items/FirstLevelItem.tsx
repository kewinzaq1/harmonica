import * as React from 'react'
import {Category} from '../../interfaces/Category'
import {BsChevronDown} from 'react-icons/bs'
import {SecondLeveWrapper} from '../Wrappers/SecondLeveWrapper'
import {useOpenHandler} from '../../utils/hooks/useOpenHandler'

export const FirstLevelItem = ({
  sportId,
  categoryName,
  eventsCount
}: Category) => {
  const {isOpen, handleOpen} = useOpenHandler()

  return (
    <>
      <li className={'flex flex-col cursor-pointer'}>
        <div
          className="flex items-end justify-between w-100"
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
            <SecondLeveWrapper sportId={sportId} />
          </ul>
        )}
      </li>
    </>
  )
}
