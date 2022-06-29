import {useCategories} from '../context'
import {filterByLevel} from '../utils/filters/filterByLevel'
import {FirstLevelItem} from './Items/FirstLevelItem'

export const SideBar = () => {
  const {categories} = useCategories()

  if (!categories) {
    return <p>Loading...</p>
  }

  const sports = filterByLevel(categories, 1)

  const classicSports = sports.filter(
    sport => !sport.categoryName.includes('Esport')
  )
  const esports = sports.filter(sport => sport.categoryName.includes('Esport'))

  return (
    <div className="flex bg-slate-900 text-slate-50 w-72 overflow-auto h-screen flex-col">
      <ul className={'flex flex-col gap-1 p-5'}>
        <h1 className={'text-xl py-2 text-bold'}>Sports</h1>
        {classicSports.map(sport => (
          <FirstLevelItem {...sport} key={sport.categoryName} />
        ))}
      </ul>{' '}
      <ul className={'flex flex-col gap-1 px-5 pb-10'}>
        <h1 className={'text-xl py-2 text-bold'}>E-Sports</h1>
        {esports.map(sport => (
          <FirstLevelItem {...sport} key={sport.categoryName} />
        ))}
      </ul>
    </div>
  )
}
