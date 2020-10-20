  
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  env: {
    "MONGO_SECRET_KEY": "DT0po3IUyv5HKp4M"
  }
})

