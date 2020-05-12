const env = process.env;

module.exports = {
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  isDev: env.NODE_ENV !== 'production',
  isBrowser: typeof window !== 'undefined',
};
