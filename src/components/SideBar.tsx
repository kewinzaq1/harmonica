import {useCategories} from '../context'
import {filterByLevel} from '../utils/filters/filterByLevel'
import {FirstLevelItem} from './items/FirstLevelItem'
import {SidebarWrapper} from './items/SidebarWrapper'

export const SideBar = () => {
  const {categories} = useCategories()

  const sports = filterByLevel(categories, 1)

  return (
    <SidebarWrapper>
      {sports.map(sport => (
        <FirstLevelItem {...sport} key={sport.categoryName} />
      ))}
    </SidebarWrapper>
  )
}
