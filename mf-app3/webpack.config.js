const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path'); 

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002,  
  },
  output: {
    publicPath: 'http://localhost:3002/', 
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfApp3',
      filename: 'query_remoteEntry.js',
      exposes: {
        './QueryComponent': './src/QueryComponent',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        '@tanstack/react-query': { singleton: true, eager: true },
        tailwindcss: { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
