import React from 'react';
import VisualizationComponent from './VisualizationComponent';
import VisualizationComponent1 from './VisualizationComponent1';
import './AnalysisResults.css';

const AnalysisResultsPage = () => {
  return (
    <div className='analysis-results'>
      <h1>Analysis Results</h1>
      <p>Here you will see the analysis results of the scraped data.</p>
      <img src="http://localhost:3000/api/price-comparison-chart" alt="Price Comparison Chart" />
      <VisualizationComponent />
      <VisualizationComponent1 />
    </div>
  );
};

export default AnalysisResultsPage;