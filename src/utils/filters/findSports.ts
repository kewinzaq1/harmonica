import {Category} from '../../interfaces/Category'

export const findSports = (categories: Category[]) =>
  categories.filter(category => category.parentName === 'Sporty')
