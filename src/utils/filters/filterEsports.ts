import {Category} from '../interfaces/Category'

export const filterEsports = (categories: Category[]) =>
  categories.filter(sport => sport.categoryName.includes('Esport'))
