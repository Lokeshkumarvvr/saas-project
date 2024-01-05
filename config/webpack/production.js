process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const { environment } = require('./environment');
const babelLoader = environment.loaders.get('babel');

if (babelLoader) {
  // Exclude specific dependencies from Babel transpilation in production
  babelLoader.exclude = /node_modules\/(?!your-dependency-to-exclude)/;
  // Replace 'your-dependency-to-exclude' with the actual dependencies you want to exclude
  // Adjust the regex pattern to match the specific dependencies
}

module.exports = environment.toWebpackConfig();
