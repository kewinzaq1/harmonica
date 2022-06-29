import {Category} from '../../utils/interfaces/Category'
import {filterByParent} from '../../utils/filters/filterByParent'
import {useCategories} from '../../context'
import {filterByLevel} from '../../utils/filters/filterByLevel'
import {ThirdLevelItem} from '../items/ThirdLevelItem'

export const ThirdLevelWrapper = ({categoryId, level}: Category) => {
  const {categories} = useCategories()

  const filtered = filterByParent(categories, categoryId)
  const items = filterByLevel(filtered, level + 1)

  console.log(filtered)

  return (
    <>
      {items.map(item => (
        <ThirdLevelItem {...item} key={item.categoryId} />
      ))}
    </>
  )
}
