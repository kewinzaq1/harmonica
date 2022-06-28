import React from 'react'
import {Category} from '../interfaces/Category'
import {groupByLevel} from '../utils/filters/groupByLevel'
import {SecondLevelItem} from './SecondLevelItem'

export const SecondLeveWrapper = ({items}: {items: Category[]}) => {
  const groupItems = groupByLevel(items)

  return (
    <div>
      {groupItems[2].map(item => (
        <SecondLevelItem
          {...item}
          key={item.categoryName}
          thirdLevelItems={groupItems['3']}
        />
      ))}
    </div>
  )
}
