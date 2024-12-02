import React from "react";
import { Bar } from "react-chartjs-2";

const PriceHistogram = ({ data }) => {
    const chartData = {
        labels: data.buckets,
        datasets: [
            {
                label: "Product Price Distribution",
                data: data.values,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={chartData} />;
};

export default PriceHistogram;
