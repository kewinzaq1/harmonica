import * as React from 'react'
import {ReactNode} from 'react'
import {useQuery} from 'react-query'
import {Context} from '../interfaces/Context'
import {fetchCategories} from '../utils/fetchers/fetchCategories'
import {Category} from '../interfaces/Category'

const CategoryContext = React.createContext<Context | null>(null)

export const CategoryProvider = ({children}: {children: ReactNode}) => {
  const {isLoading, error, data} = useQuery('/categories', fetchCategories)

  const categories: Category[] = data?.sort(
    (a: Category, b: Category) => a.sortOrder - b.sortOrder
  )

  return (
    <CategoryContext.Provider value={{isLoading, error, categories}}>
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategories = () => {
  const context = React.useContext(CategoryContext)
  if (!context) {
    throw new Error('useCategories() used only within CategoriesProvider')
  }
  return context
}
