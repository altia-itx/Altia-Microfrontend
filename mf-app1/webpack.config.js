const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Entry point for your application
  mode: 'development', // Set mode to development
  devServer: {
    static: path.join(__dirname, 'dist'), // Serve static files from dist
    port: 3000, // Port for the development server
  },
  output: {
    publicPath: 'http://localhost:3000/', // Public path for loading remote modules
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // Allow these file extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Regex for .ts and .tsx files
        use: 'ts-loader', // Use ts-loader to handle TypeScript files
        exclude: /node_modules/, // Exclude node_modules
      },
      {
        test: /\.jsx?$/, // Regex for .js and .jsx files
        use: {
          loader: 'babel-loader', // Use babel-loader for JS/JSX
          options: {
            presets: [
              '@babel/preset-env', // Preset for modern JavaScript
              '@babel/preset-react', // Preset for React
              '@babel/preset-typescript', // Optional: If you're using TypeScript with Babel
            ],
          },
        },
        exclude: /node_modules/, // Exclude node_modules
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host', // Name of the host application
      remotes: {
        remote: 'remote@http://localhost:3001/remoteEntry.js', // Remote application configuration
      },
      shared: {
        react: { singleton: true, eager: true },    // Eager consumption
        'react-dom': { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template for the application
    }),
  ],
};
