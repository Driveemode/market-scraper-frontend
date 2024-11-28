import React from 'react';
import VisualizationComponent from './VisualizationComponent';
import VisualizationComponent1 from './VisualizationComponent1';

const AnalysisResultsPage = () => {
  return (
    <div>
      <h1>Analysis Results</h1>
      <p>Here you will see the analysis results of the scraped data.</p>
      <VisualizationComponent />
      <VisualizationComponent1 />
    </div>
  );
};

export default AnalysisResultsPage;