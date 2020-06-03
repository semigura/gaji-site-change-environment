const path = require('path');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const flexfixes = require('postcss-flexbugs-fixes');

/* eslint-disable no-param-reassign */
module.exports = async ({ config }) => {
  // Transpile Gatsby module because Gastby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  // use @babel/plugin-proposal-class-properties for class arrow functions
  config.module.rules[0].use[0].options.plugins = [
    require.resolve('@babel/plugin-proposal-class-properties'),
  ];

  config.resolve.extensions.push('.jsx');

  config.module.rules.push({
    test: [/(.*sprite)\.svg$/],
    loaders: ['raw-loader'],
  });

  config.module.rules.push({
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /^(?!.*sprite).*(\.svg)$/],
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]',
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(css|scss)$/,
    use: [
      // 'css-hot-loader',
      // 'style-loader',
      // {
      //   loader: 'css-loader',
      //   options: {
      //     importLoaders: 1,
      //     modules: {
      //       localIdentName: '[local]--[hash:base64:5]',
      //     },
      //     sourceMap: true,
      //   },
      // },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          sourceMap: true,
          plugins: [flexfixes, autoprefixer, mqpacker],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, '../node_modules'),
              path.resolve(__dirname, '../src'),
            ],
          },
          sourceMap: true,
        },
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../src/config/theme.scss'),
        },
      },
    ],
  });

  return config;
};
