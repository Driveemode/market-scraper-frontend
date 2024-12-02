import React from "react";
import { Pie } from "react-chartjs-2";

const BrandDistribution = ({ data }) => {
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: "Brand Distribution",
                data: Object.values(data),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8A2BE2", "#ADFF2F"],
            },
        ],
    };

    return <Pie data={chartData} />;
};

export default BrandDistribution;
