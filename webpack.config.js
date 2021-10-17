module.exports = {
  entry: './js/main.js',
  output: {
    filename: './build.js',
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
  },
}
