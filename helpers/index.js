export const toUSD = n => n.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})
