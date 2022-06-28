import {Category} from '../../interfaces/Category'

export const findBySport = (categories: Category[], sportId: number) =>
  categories.filter(
    category => category.sportId === sportId && category.parentName !== 'Sporty'
  )
