import React, { useState } from 'react';
import './ScraperForm.css';

const ScraperForm = () => {
  const [selectedSite, setSelectedSite] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const urls = {
      amazon: 'https://www.amazon.com/s?k=laptops',
      walmart: 'https://www.walmart.com/search/?query=laptops',
      bestbuy: 'https://www.bestbuy.com/site/searchpage.jsp?st=laptops',
      aliexpress: 'https://www.aliexpress.com/wholesale?SearchText=laptops',
    };

    const sites = {
      amazon: 'Amazon',
      walmart: 'Walmart',
      bestbuy: 'Best Buy',
      aliexpress: 'AliExpress',
    };

    const method = 'cheerio'; // or 'puppeteer' based on your requirement

    try {
      const url = urls[selectedSite];
      const site = sites[selectedSite];
      const response = await fetch('http://localhost:3000/api/scrape-ecom-cheerio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, site, method }),
      });

      const data = await response.json();
      const combinedResults = data.products;
      console.log('Data received:', combinedResults); // Debugging step
      if (combinedResults !== undefined) {
        setResult(combinedResults);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCheckboxChange = (event) => {
    setSelectedSite(event.target.value);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h6>Select Website to be scraped</h6>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="checkbox"
              value="amazon"
              checked={selectedSite === 'amazon'}
              onChange={handleCheckboxChange}
            />
            <label>Amazon</label>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              value="walmart"
              checked={selectedSite === 'walmart'}
              onChange={handleCheckboxChange}
            />
            <label>Walmart</label>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              value="bestbuy"
              checked={selectedSite === 'bestbuy'}
              onChange={handleCheckboxChange}
            />
            <label>Best Buy</label>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              value="aliexpress"
              checked={selectedSite === 'aliexpress'}
              onChange={handleCheckboxChange}
            />
            <label>AliExpress</label>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              value="all"
              checked={selectedSite === 'all'}
              onChange={handleCheckboxChange}
            />
            <label>All</label>
          </div>
          <button type="submit">Start Scraping</button>
        </form>
        {result && Array.isArray(result) && result.length > 0 ? (
          <div className="result">
            <h2>Scraping Result</h2>
            <table>
              <thead>
                <tr>
                  {Object.keys(result[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.map((item, index) => (
                  <tr key={index}>
                    {Object.values(item).map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default ScraperForm;
