import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register the necessary components
Chart.register(...registerables);

const VisualizationComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Vendor 1', 'Vendor 2', 'Vendor 3'],
        datasets: [
          {
            label: 'Top Vendors',
            data: [12, 19, 3],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default VisualizationComponent;