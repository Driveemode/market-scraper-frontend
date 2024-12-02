import React from "react";
import { Line } from "react-chartjs-2";

const PriceTrends = ({ data }) => {
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: "Price Trends",
                data: Object.values(data),
                fill: false,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
            },
        ],
    };

    return <Line data={chartData} />;
};

export default PriceTrends;
