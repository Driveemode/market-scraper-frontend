import React, { useState } from 'react';
import './ScraperForm.css';
import swal from 'sweetalert';

const ScraperForm = () => {
  const [selectedSite, setSelectedSite] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('laptops');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const urls = {
      laptops: {
        amazon: 'https://www.amazon.com/s?k=laptops',
        walmart: 'https://api.scraperapi.com/structured/walmart/search?api_key=17a6f7f56882d4772212741bcbf5f0fe&query=laptops&page=',
                // 'https://api.scraperapi.com/structured/walmart/search?api_key=17a6f7f56882d4772212741bcbf5f0fe&query=laptops&page='
        // walmart: 'https://www.walmart.com/search/?query=laptops',
        bestbuy: 'https://www.bestbuy.com/site/searchpage.jsp?st=laptops',
        aliexpress: 'https://www.aliexpress.com/wholesale?SearchText=laptops',
        ebay: 'https://api.scraperapi.com/structured/ebay/search?api_key=17a6f7f56882d4772212741bcbf5f0fe&query=laptops&page=',
      },
      clothes: {
        amazon: 'https://www.amazon.com/s?k=clothes',
        walmart: 'https://api.scraperapi.com/structured/walmart/search?api_key=17a6f7f56882d4772212741bcbf5f0fe&query=clothes&page=',
        // walmart: 'https://www.walmart.com/search/?query=clothes',
        bestbuy: 'https://www.bestbuy.com/searchpage.jsp?st=clothes',
        aliexpress: 'https://www.aliexpress.com/wholesale?SearchText=clothes',
        ebay: 'https://api.scraperapi.com/structured/ebay/search?api_key=17a6f7f56882d4772212741bcbf5f0fe&query=clothes&page=',
      },
      tvs: {
        amazon: 'https://www.amazon.com/s?k=TVs',
        walmart: 'https://api.scraperapi.com/structured/walmart/search?api_key=17a6f7f56882d4772212741bcbf5f0fe&query=TVs&page=',
        // walmart: 'https://www.walmart.com/search/?query=TVs',
        bestbuy: 'https://www.bestbuy.com/searchpage.jsp?st=TVs',
        aliexpress: 'https://www.aliexpress.com/wholesale?SearchText=TVs',
        ebay: 'https://api.scraperapi.com/structured/ebay/search?api_key=17a6f7f56882d4772212741bcbf5f0fe&query=TVs&page=',
      },
    };

    const sites = {
      amazon: 'Amazon',
      walmart: 'Walmart',
      ebay: 'eBay',
    };

    const method = 'cheerio'; // or 'puppeteer' based on your requirement

    try {
      const url = urls[selectedCategory][selectedSite];
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
        swal("Success!", "Data fetched successfully!", "success");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      swal("Error!", "Failed to fetch data!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleBoxClick = (site) => {
    setSelectedSite(site);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h6>Select Category and Website to be scraped</h6>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="laptops">Laptops</option>
              <option value="clothes">Clothes</option>
              <option value="tvs">TVs</option> {/* Added new category */}
            </select>
          </div>
          <div className="form-group">
            <div
              className={`box ${selectedSite === 'amazon' ? 'active' : ''}`}
              onClick={() => handleBoxClick('amazon')}
            >
              Amazon
            </div>
            <div
              className={`box ${selectedSite === 'walmart' ? 'active' : ''}`}
              onClick={() => handleBoxClick('walmart')}
            >
              Walmart
            </div>
            <div
              className={`box ${selectedSite === 'bestbuy' ? 'active' : ''}`}
              onClick={() => handleBoxClick('bestbuy')}
            >
              Best Buy
            </div>
            <div
              className={`box ${selectedSite === 'aliexpress' ? 'active' : ''}`}
              onClick={() => handleBoxClick('aliexpress')}
            >
              AliExpress
            </div>
            <div
              className={`box ${selectedSite === 'ebay' ? 'active' : ''}`}
              onClick={() => handleBoxClick('ebay')}
            >
              eBay
            </div>
            <div
              className={`box ${selectedSite === 'all' ? 'active' : ''}`}
              onClick={() => handleBoxClick('all')}
            >
              All
            </div>
          </div>
          <button type="submit">Start Scraping</button>
        </form>
        {loading && <div className="loader">Loading...</div>}
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
          !loading && <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default ScraperForm;
