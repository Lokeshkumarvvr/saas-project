const { environment } = require('@rails/webpacker');

// Your other webpack configurations here...
const babelLoader = environment.loaders.get('babel');
babelLoader.exclude = /node_modules\/(?!your-dependency-to-exclude)/; // Replace 'your-dependency-to-exclude' with actual dependencies if needed
module.exports = environment;
