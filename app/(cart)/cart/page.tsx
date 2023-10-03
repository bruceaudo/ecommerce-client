"use client"
import { useShoppingCartContext } from '@/app/hooks/ShoppingCartContextHook';
import React from 'react';

type pageProps = {
    
};

const page: React.FC<pageProps> = () => {
    const { products, setProducts } = useShoppingCartContext()
    
    return <div className='bg-white w-1/2 min-h-screen border rounded-lg p-5'>Shopping cart</div>
}
export default page;