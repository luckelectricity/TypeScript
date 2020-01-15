module.exports = {
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
