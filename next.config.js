const nextConfig = {
  env: {
    APP_ENV: process.env.APP_ENV,
    PUBLIC_HOST: process.env.PUBLIC_HOST,
    PROJECT_ANALYTICS: process.env.PROJECT_ANALYTICS,
  },
  images: {
    domains: ['storage.googleapis.com', 'firebasestorage.googleapis.com'],
  },
  poweredByHeader: false,
}

module.exports = nextConfig