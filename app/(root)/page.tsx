import React from 'react';
import ProductCard from './root-ui/ProductCard';

type pageProps = {
    
};

const getData = async () => {
    const res = await fetch("http://localhost:5000/api/v1/products");

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

const page: React.FC<pageProps> = async () => {
    
    const data = await getData();
    
    return <>
        {data && data.map((d:{title:string,price:string,link:React.Key|string, _id:string,imageURL:string[]}) => (
            <ProductCard key={d._id} title={d.title} price={d.price} imageURL={d.imageURL} link={d._id} />
        ))}
    </>
}
export default page;