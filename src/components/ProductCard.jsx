import React from 'react';

const ProductCard = ({ image, name, description, price }) => (
  <div className="flex flex-col items-center p-4 rounded-lg border-4 bg-white border-gold-default mb-5 shadow-md">
    <img src={image} alt={name} className="w-24 h-24 object-contain mb-3" />
    <h4 className="text-lg font-semibold mb-2">{name}</h4>
    <p className="text-gray-600 mb-2 text-center">{description}</p>
    <span className="text-xl font-bold">{price}</span>
  </div>
);

export default ProductCard;
