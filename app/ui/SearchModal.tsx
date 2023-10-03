"use client"
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { useProductContext } from '../hooks/ProductContextHook';
import ProductCard2 from '../(root)/root-ui/ProcuctCard2';
import { useSearchModalContext } from '../hooks/SearchModalContextHook';

type SearchModalProps = {};

const SearchModal: React.FC<SearchModalProps> = () => {
  const [search, setSearch] = useState('');
  const { productsArray, setProductsArray } = useProductContext()
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
    

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProductsArray(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData()
  }, [setProductsArray]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearch(input);

    const regex = new RegExp(input, 'i');

    // Filter products based on the regex match
    const filtered = productsArray.filter((product) => regex.test(product.title));

    setFilteredProducts(filtered);
  }

  const { open, setOpen } = useSearchModalContext()
  

  return (
      <>
       
      <div onClick={() => {
        setOpen(prev => !prev)
      }} className="fixed top-0 bottom-0 left-0 right-0 bg-gray-400 opacity-50 z-20"></div>
      <section className='bg-white lg:w-[60%] w-[99%] z-50 centered-div rounded-lg min-h-screen p-5 pb-10 shadow-lg'>
        <p onClick={() => {
          setOpen(prev => !prev)
        }} className='flex items-center gap-2 cursor-pointer mb-6 w-fit'>
          <ChevronLeftIcon className='w-6 h-6' /> Back
        </p>
        <form className='mb-8'>
          <input
            value={search}
            onChange={handleSearch}
            className='rounded-lg h-12 bg-gray-100 w-full indent-3 focus:outline-none focus:border-2 focus:border-green-500'
            type='text'
            placeholder='Search for products'
          />
        </form>
        <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-3'>
          {filteredProducts.length > 0 && search !== "" && (
            filteredProducts.map((product) => {
              return (
                <ProductCard2
                  key={product._id}
                  title={product.title}
                  price={product.price}
                  imageURL={product.imageURL[0]}
                  link={product._id}
                />
              )
            })
          )}
          {filteredProducts.length === 0 && search !== "" && <p>No products found</p>}
          {search === "" && <p>What are you looking for?</p>}
        </div>
      </section>
    </>
  );
};

export default SearchModal;
