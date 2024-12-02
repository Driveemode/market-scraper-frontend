import React, { useState, useEffect } from 'react';
import './ProductsPage1.css';
import Dashboard from './Dashboard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(50);

  useEffect(() => {
    // Fetch the product data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products', {
          headers: {
            'Cache-Control': 'no-cache',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
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
      {/* <h1>Products</h1> */}
      {/* <table>
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
      </table> */}
      {/* <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      /> */}
      {products.length > 0 && <Dashboard products={products} />}
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