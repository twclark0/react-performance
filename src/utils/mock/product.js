export default () => {
  return {
    price: parseFloat((Math.random() * (0.0 - 10.0) + 10.0).toFixed(2)),
    rating: parseFloat(Math.floor(Math.random() * 6)),
    sale: [false, false, false, true][Math.floor(Math.random() * 4)],
    discounted: [false, false, false, true][Math.floor(Math.random() * 4)],
    discount: parseFloat((Math.random() * (0.0 - 10.0) + 10.0).toFixed(2)),
    name: [
      'Blouse',
      'Casual Shirt',
      'Plaid Shirt',
      'Long Sleeve',
      'Denim Jacked',
      'Fur Coat',
      'Crop Top',
      'Stripe Tee'
    ][Math.floor(Math.random() * 8)],
    description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][
      Math.floor(Math.random() * 5)
    ]
  };
};
