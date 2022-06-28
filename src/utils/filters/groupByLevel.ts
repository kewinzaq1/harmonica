import {Category} from '../../interfaces/Category'

export const groupByLevel = (categories: Category[]) =>
  categories.reduce(
    (acc, category) => {
      acc[category.level as keyof typeof acc] = [
        ...acc[category.level as keyof typeof acc],
        category
      ]
      return acc
    },
    {1: [] as Category[], 2: [] as Category[], 3: [] as Category[]}
  )
