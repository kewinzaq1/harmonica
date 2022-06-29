import {Category} from '../../interfaces/Category'

export const filterByParent = (
  categories: Category[],
  parentCategory: number
) => categories.filter(category => category.parentCategory === parentCategory)
