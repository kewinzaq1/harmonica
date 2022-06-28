import * as React from 'react'

export const useOpenHandler = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpen = () => setIsOpen(!isOpen)

  return {isOpen, handleOpen}
}
