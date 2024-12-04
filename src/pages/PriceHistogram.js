import React from 'react';
import { Bar } from 'react-chartjs-2';

const PriceHistogram = ({ data, width, height }) => {
  if (!Array.isArray(data)) {
    return null;
  }

  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Price Distribution',
        data: data.map(item => item.value),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} width={width} height={height} />;
};

export default PriceHistogram;
