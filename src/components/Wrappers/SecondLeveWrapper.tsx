import {Category} from '../../interfaces/Category'
import {SecondLevelItem} from '../Items/SecondLevelItem'
import {useCategories} from '../../context'
import {filterBySports} from '../../utils/filters/filterBySports'
import {filterByLevel} from '../../utils/filters/filterByLevel'

export const SecondLeveWrapper = ({sportId}: Partial<Category>) => {
  const {categories} = useCategories()

  const filtered = filterBySports(categories, sportId as number)
  const items = filterByLevel(filtered, 2)

  return (
    <div>
      {items.map(item => (
        <SecondLevelItem {...item} key={item.categoryName} />
      ))}
    </div>
  )
}
