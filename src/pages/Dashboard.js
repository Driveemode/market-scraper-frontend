import React from "react";
import PriceHistogram from "./PriceHistogram";
import BrandDistribution from "./BrandDistribution";
import TopRatedProducts from "./TopRatedProducts";
import PriceTrends from "./PriceTrends";
import { processData } from "../utils/dataProcessor";
import './Dashboard.css';

const Dashboard = ({ products }) => {
  const { priceDistribution, brandData, topRated, dateTrends } = processData(products);

  return (
    <div className="dashboard">
      <h1>Product Analytics</h1>
      <PriceHistogram data={priceDistribution} />
      <BrandDistribution data={brandData} />
      <TopRatedProducts products={topRated} />
      <PriceTrends data={dateTrends} />
    </div>
  );
};

export default Dashboard;
