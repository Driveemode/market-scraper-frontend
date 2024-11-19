import React, { useState } from 'react';
import '../App.css';

const ScrapeForm = () => {
    const [url, setUrl] = useState('');
    const [fields, setFields] = useState('');
    const [method, setMethod] = useState('cheerio');
    const [result, setResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://18.116.80.104:3000/api/scrape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url, fields: JSON.parse(fields), method })
        });

        const data = await response.json();
        setResult(data);
    };

    return (
        <div className="App">
            <div className="form-container">
                <h1>Web Scraper</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>URL:</label>
                        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Fields (JSON format):</label>
                        <textarea value={fields} onChange={(e) => setFields(e.target.value)} rows="4" required />
                    </div>
                    <div className="form-group">
                        <label>Method:</label>
                        <select value={method} onChange={(e) => setMethod(e.target.value)} required>
                            <option value="cheerio">Cheerio</option>
                            <option value="puppeteer">Puppeteer</option>
                            <option value="selenium">Selenium</option>
                            <option value="jsdom">JSDOM</option>
                            <option value="request-cheerio">Request-Cheerio</option>
                            <option value="playwright">Playwright</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-button">Scrape</button>
                </form>
                {result && (
                    <div className="result">
                        <h2>Result</h2>
                        <pre>{JSON.stringify(result, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScrapeForm;
