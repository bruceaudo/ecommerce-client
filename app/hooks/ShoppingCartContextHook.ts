'use client'
import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext)
  if (!context) {
    throw new Error(
      'useShoppingCartContext must be used within a ShoppingCartContextProvider'
    )
  }
  return context
}
