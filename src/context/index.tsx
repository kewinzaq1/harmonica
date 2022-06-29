import {createContext, ReactNode, useContext} from 'react'
import {useQuery} from 'react-query'
import {Context} from '../utils/interfaces/Context'
import {fetchCategories} from '../utils/fetchers/fetchCategories'
import {Category} from '../utils/interfaces/Category'
import {parseCategories} from '../utils/parsers/parseCategories'
import {SidebarPlaceholder} from '../components/SidebarPlaceholder'

const CategoryContext = createContext<Context | null>(null)

export const CategoryProvider = ({children}: {children: ReactNode}) => {
  const {isLoading, error, data} = useQuery('/categories', fetchCategories)

  if (isLoading) {
    return <SidebarPlaceholder />
  }

  const categories: Category[] = parseCategories(data)

  return (
    <CategoryContext.Provider value={{isLoading, error, categories}}>
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategories = () => {
  const context = useContext(CategoryContext)
  if (!context) {
    throw new Error('useCategories() might used only with CategoriesProvider')
  }
  return context
}
