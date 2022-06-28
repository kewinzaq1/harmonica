import React from 'react'
import {useCategories} from './context'
import {findSports} from './utils/filters/findSports'
import {SportItem} from './components/SportItem'
import './App.css'

function App() {
  const {categories} = useCategories()

  if (!categories) {
    return <p>Loading...</p>
  }

  const sports = findSports(categories)

  const classicSports = sports.filter(
    sport => !sport.categoryName.includes('Esport')
  )
  const esports = sports.filter(sport => sport.categoryName.includes('Esport'))

  return (
    <div className="flex bg-slate-900 text-slate-50 w-64 overflow-auto h-screen flex-col">
      <ul className={'flex flex-col gap-1 p-10'}>
        <h1 className={'text-xl py-2 text-bold'}>Sports</h1>
        {classicSports.map(sport => (
          <SportItem {...sport} key={sport.categoryName} />
        ))}
      </ul>{' '}
      <ul className={'flex flex-col gap-1 px-10'}>
        <h1 className={'text-xl py-2 text-bold'}>E-Sports</h1>
        {esports.map(sport => (
          <SportItem {...sport} key={sport.categoryName} />
        ))}
      </ul>
    </div>
  )
}

export default App
