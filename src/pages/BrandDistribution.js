import React from 'react';
import { Pie } from 'react-chartjs-2';

const BrandDistribution = ({ data, width, height }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Brand Distribution',
        data: data.map(item => item.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return <div style={{ width, height }}><Pie data={chartData} options={options} /></div>;
};

export default BrandDistribution;
