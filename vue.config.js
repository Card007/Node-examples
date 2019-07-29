module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    open: true,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://39.97.33.178',
        // target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
}
