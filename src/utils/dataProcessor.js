export const processData = (data) => {
  if (!data || !Array.isArray(data)) {
    return {
      priceDistribution: [],
      brandData: [],
      topRated: [],
      dateTrends: [],
    };
  }

  // Price Distribution
  console.log("Received data at processData : ", data);
  const priceBuckets = [0, 100, 200, 300, 400, 500];
  const priceDistribution = priceBuckets.map((bucket, index) => 
      data.filter(
          (item) =>
              item.price >= bucket &&
              (index === priceBuckets.length - 1 || item.currentPrice < priceBuckets[index + 1])
      ).length
  );
  console.log("Price Distribution:", { buckets: priceBuckets, values: priceDistribution });

  // Brand Distribution
  const brandData = data.reduce((acc, item) => {
      const brand = item.brand || "Unknown";
      acc[brand] = (acc[brand] || 0) + 1;
      return acc;
  }, {});

  // Top Rated Products
  const topRated = data
      .filter((item) => item.rating)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);

  // Date-Based Trends
  const dateTrends = data.reduce((acc, item) => {
      const date = new Date(item.scrapedAt).toLocaleDateString();
      acc[date] = acc[date] || [];
      acc[date].push(item.currentPrice);
      return acc;
  }, {});
  for (const date in dateTrends) {
      dateTrends[date] = (
          dateTrends[date].reduce((sum, price) => sum + price, 0) / dateTrends[date].length
      ).toFixed(2);
  }

  return {
      priceDistribution: { buckets: priceBuckets, values: priceDistribution },
      brandData,
      topRated,
      dateTrends,
  };
};
