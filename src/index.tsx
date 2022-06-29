import * as React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {QueryClient, QueryClientProvider} from 'react-query'
import {CategoryProvider} from './context'
import {App} from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <CategoryProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CategoryProvider>
  </QueryClientProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
