module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://127.0.0.1:3000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
