module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 75,
      propList: [
        '*'
      ],
      unitPrecision: 5,
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 12
    }
  }
}
