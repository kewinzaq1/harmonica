import {Category} from '../interfaces/Category'
import {calcEsportEvents} from '../calcs/calcEsportEvents'

export const parseCategories = (categories: Category[]) => {
  const classicSports = categories.filter(
    sport => !sport.sportName.includes('Esport')
  )

  const eSports = categories
    .filter(sport => sport.sportName.includes('Esport'))
    .map(category => {
      if (category.parentName === 'Sporty') {
        return {
          ...category,
          level: category.level + 1,
          parentCategory: 99999
        }
      } else {
        return {...category, level: category.level + 1}
      }
    })

  const eEsportsEventsCount = calcEsportEvents(eSports)

  const eSportsCategory = {
    categoryId: 99999,
    remoteId: 99999,
    categoryName: 'Esport',
    level: 1,
    parentCategory: 0,
    sportId: 99999,
    eventsCount: eEsportsEventsCount,
    sortOrder: 99999,
    treatAsSport: 1,
    categoryFlag: 'null',
    parentName: 'Sporty',
    sportName: 'Esport'
  }

  return [...classicSports, eSportsCategory, ...eSports].sort(
    (a: Category, b: Category) => a.sortOrder - b.sortOrder
  )
}
