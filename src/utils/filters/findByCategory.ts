import {Category} from '../../interfaces/Category'

export const findByCategory = (categories: Category[], categoryId: number) =>
  categories.filter(category => category.categoryId === categoryId)
