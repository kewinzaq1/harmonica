import {Category} from '../../interfaces/Category'

export const filterByCategory = (categories: Category[], categoryId: number) =>
  categories.filter(category => category.categoryId === categoryId)
