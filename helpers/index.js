export const toUSD = n => n.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const kebab = s => s
  .toLowerCase()
  .replace(/[^a-z0-9\s]/g, '')
  .replace(/\s+/g, '-')
