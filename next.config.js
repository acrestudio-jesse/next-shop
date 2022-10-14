/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DATABASE_PASSWORD: 'thirty-short-black-violins',
    DATABASE:'mongodb+srv://jerikkoa:<PASSWORD>@cluster0.ev1qdip.mongodb.net/?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
