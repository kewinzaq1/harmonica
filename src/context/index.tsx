import * as React from 'react'
import {ReactNode} from 'react'
import {useQuery} from 'react-query'
import {Context} from '../utils/interfaces/Context'
import {fetchCategories} from '../utils/fetchers/fetchCategories'
import {Category} from '../utils/interfaces/Category'
import {parseCategories} from '../utils/parsers/parseCategories'

const CategoryContext = React.createContext<Context | null>(null)

export const CategoryProvider = ({children}: {children: ReactNode}) => {
  const {isLoading, error, data} = useQuery('/categories', fetchCategories)

  if (isLoading) {
    return <p>Is Loading</p>
  }

  const categories: Category[] = parseCategories(data)
  console.log('categories', categories)

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
