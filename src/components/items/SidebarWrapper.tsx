import {ReactNode} from 'react'

export const SidebarWrapper = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex bg-slate-900 text-slate-50 w-72 overflow-auto h-screen flex-col scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-slate-50">
      <ul className={'flex flex-col gap-1 p-5'}>
        <h1 className={'text-xl py-2 text-bold'}>Sports</h1>
        {children}
      </ul>
    </div>
  )
}
