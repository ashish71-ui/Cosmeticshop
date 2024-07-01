import React from 'react';
import { products } from '../constants';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <section id='products' className="py-10">
      <div className="text-center mb-10">
        <h2 className='font-poppins font-semibold cursor-pointer sm:text-[25px] text-[18px] text-gold-light ml-[20px]'>Our Products</h2>
        
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map(product => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
