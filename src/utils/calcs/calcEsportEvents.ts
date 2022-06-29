import {Category} from '../interfaces/Category'

export const calcEsportEvents = (categories: Category[]) =>
  categories
    .filter(category => category.parentName === 'Sporty')
    .reduce((acc, category) => {
      acc += category.eventsCount
      return acc
    }, 0)
