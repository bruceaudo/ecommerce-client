'use client'
import { useContext } from 'react'
import { SearchModalContext } from '../contexts/SearchModalContext'

export const useSearchModalContext = () => {
  const context = useContext(SearchModalContext)
  if (!context) {
    throw new Error(
      'useSearchModalContext must be used within a SearchModalContextProvider'
    )
  }
  return context
}
