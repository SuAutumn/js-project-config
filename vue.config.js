module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          // resources: './path/to/resources.scss',

          // Or array of paths
          resources: ['./src/assets/sass/var.scss', './src/assets/sass/common.scss']
        })
        .end()
    })
  }
}
