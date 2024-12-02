import React from 'react';
import './TopRatedProducts.css';

const TopRatedProducts = ({ products }) => {
  return (
    <ul className="topRatedProducts">
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.rating} stars
        </li>
      ))}
    </ul>
  );
};

export default TopRatedProducts;
