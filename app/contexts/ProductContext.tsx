"use client"
import { SetStateAction, createContext, useState } from "react";

export type ProductProps = {
    productsArray: any[];
    setProductsArray: React.Dispatch<SetStateAction<any[]>>
}

export const InitialProductState: ProductProps = {
    productsArray: [],
    setProductsArray: ()=>{}
}

export const ProductContext = createContext<ProductProps>(InitialProductState);

export type Props = {
    children: React.ReactNode
}

export const ProductContextProvider = ({ children }: Props) => {
    const [productsArray, setProductsArray] = useState(InitialProductState.productsArray)
    
    const productValues = {
        productsArray,
        setProductsArray
    }
    
    return <ProductContext.Provider value={productValues}>
        {children}
    </ProductContext.Provider>
}