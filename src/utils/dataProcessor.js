// utils/dataProcessor.js
export const processData = (data) => {
  if (!data || !Array.isArray(data)) {
    return {
      priceDistribution: [],
      brandData: [],
      topRated: [],
      dateTrends: [],
    };
  }

  const priceDistribution = data.filter(item => item.price).map(item => ({ label: item.name, value: item.price }));
  const brandData = data.filter(item => item.brand).map(item => ({ label: item.brand, value: item.price }));
  const topRated = data.filter(item => item.rating).sort((a, b) => b.rating - a.rating).slice(0, 10);
  const dateTrends = data.filter(item => item.date).map(item => ({ date: item.date, price: item.price }));

  return {
    priceDistribution,
    brandData,
    topRated,
    dateTrends,
  };
};
