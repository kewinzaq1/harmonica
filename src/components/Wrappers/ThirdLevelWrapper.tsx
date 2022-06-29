import {Category} from '../../utils/interfaces/Category'
import {filterByParent} from '../../utils/filters/filterByParent'
import {useCategories} from '../../context'
import {filterByLevel} from '../../utils/filters/filterByLevel'
import {ThirdLevelItem} from '../Items/ThirdLevelItem'

export const ThirdLevelWrapper = ({categoryId}: Partial<Category>) => {
  const {categories} = useCategories()

  const filtered = filterByParent(categories, categoryId as number)
  const items = filterByLevel(filtered, 3)

  return (
    <>
      {items.map(item => (
        <ThirdLevelItem {...item} key={item.categoryId} />
      ))}
    </>
  )
}
