import {Category} from '../../interfaces/Category'

export const filterByLevel = (categories: Category[], level: number) =>
  categories.filter(category => category.level === level)
