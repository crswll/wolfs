import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig()

export const toUSD = n => n.toLocaleString
  ? n.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  : `$${n}`

export const kebab = s => s
  .toLowerCase()
  .replace(/[^a-z0-9\s]/g, '')
  .replace(/\s+/g, '-')

export const getPath = path => `${publicRuntimeConfig.publicUrl}${path || ''}`
export const isLive = publicRuntimeConfig.isLive
