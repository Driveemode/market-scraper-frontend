import React from "react";
import PriceHistogram from "./PriceHistogram";
import BrandDistribution from "./BrandDistribution";
import TopRatedProducts from "./TopRatedProducts";
import PriceTrends from "./PriceTrends";
import { processData } from "../utils/dataProcessor";
import './Dashboard.css';

const Dashboard = ({ products }) => {
  const { priceDistribution, brandData, topRated, dateTrends } = processData(products);

  const chartWidth = 300; // Adjust the width as needed
  const chartHeight = 200; // Adjust the height as needed

  return (
    <div className="dashboard">
      <h1>Product Analytics</h1>
      <PriceHistogram data={priceDistribution} width={chartWidth} height={chartHeight} />
      <BrandDistribution data={brandData} width={chartWidth} height={chartHeight} />
      <TopRatedProducts products={topRated} />
      <PriceTrends data={dateTrends} width={chartWidth} height={chartHeight} />
    </div>
  );
};

export default Dashboard;
