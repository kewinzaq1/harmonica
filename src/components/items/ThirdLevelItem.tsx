import {Category} from '../../utils/interfaces/Category'
import {useOpenHandler} from '../../utils/hooks/useOpenHandler'

export const ThirdLevelItem = (props: Category) => {
  const {isOpen: isChecked, handleOpen: handleChecked} = useOpenHandler()

  return (
    <>
      <div className="flex items-center gap-1 w-100" onClick={handleChecked}>
        <input type="checkbox" checked={isChecked} onChange={handleChecked} />
        <p className={'font-semibold text-xs'}>
          {props.categoryName}
          <span className={'ml-1 font-light'}>({props.eventsCount})</span>
        </p>
      </div>
    </>
  )
}
