import React, { useState, useEffect } from 'react';
import './ProductsPage1.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(50);

  useEffect(() => {
    // Fetch the product data from the API
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter out unwanted keys
  const filteredKeys = products.length > 0 ? Object.keys(products[0]).filter(key => key !== '_id' && key !== 'scrapedAt') : [];

  return (
    <div className="products-page">
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            {filteredKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={index}>
              {filteredKeys.map((key) => (
                <td key={key}>{product[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductsPage;