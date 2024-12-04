import React from 'react';
import { Line } from 'react-chartjs-2';

const PriceTrends = ({ data, width, height }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Price Trends',
        data: data.map(item => item.price),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return <div style={{ width, height }}><Line data={chartData} options={options} /></div>;
};

export default PriceTrends;
