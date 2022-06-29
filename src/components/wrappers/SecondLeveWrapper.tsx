import {Category} from '../../utils/interfaces/Category'
import {SecondLevelItem} from '../items/SecondLevelItem'
import {useCategories} from '../../context'
import {filterByLevel} from '../../utils/filters/filterByLevel'
import {filterByParent} from '../../utils/filters/filterByParent'

export const SecondLeveWrapper = ({categoryId}: Partial<Category>) => {
  const {categories} = useCategories()

  const filtered = filterByParent(categories, categoryId as number)
  const items = filterByLevel(filtered, 2)

  return (
    <div>
      {items.map(item => (
        <SecondLevelItem {...item} key={item.categoryId} />
      ))}
    </div>
  )
}
