const path = require('path')
const { getLoader, loaderByName } = require('@craco/craco')

const absolutePath = path.join(__dirname, '../core')

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'))

      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include]

        match.loader.include = include.concat[absolutePath]
      }

      return webpackConfig
    },
  },
}
