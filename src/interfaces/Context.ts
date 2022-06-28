import {Category} from './Category'

export interface Context {
  isLoading: boolean
  error: unknown
  categories: Category[]
}
