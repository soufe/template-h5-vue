module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*'],
      unitPrecision: 5,
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 12
    }
  }
}
