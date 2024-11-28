import React, { useState } from 'react';
import './ScraperForm.css';

const ScraperForm = () => {
  const [selectedSite, setSelectedSite] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = selectedSite === 'amazon' ? 'https://www.amazon.in/s?k=laptops' : 'https://www.flipkart.com/search?q=laptops';
    const site = selectedSite === 'amazon' ? "Amazon" : "Flipkart";
    const method = 'cheerio'; // or 'puppeteer' based on your requirement

    try {
      const response = await fetch('http://localhost:3000/api/scrape-ecom-cheerio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url, site, method })
      });

      const data = await response.json();
      console.log("Data received:", data); // Debugging step
      setResult(data.products);
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
        <h1>Web Scraper</h1>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              value="amazon"
              checked={selectedSite === 'amazon'}
              onChange={handleCheckboxChange}
            />
            Amazon
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              value="flipkart"
              checked={selectedSite === 'flipkart'}
              onChange={handleCheckboxChange}
            />
            Flipkart
          </label>
        </div>
        <button onClick={handleSubmit}>Start Scraping</button>
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
