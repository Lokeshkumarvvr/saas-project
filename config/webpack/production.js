// webpack/environment.js or webpack/production.js

const { environment } = require('@rails/webpacker');

const babelLoader = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
      // Add other Babel options or plugins here if needed
    }
  }
};

// Add Babel loader to environment if it's defined
if (environment && environment.loaders) {
  environment.loaders.append('babel', babelLoader);
}

module.exports = environment;
