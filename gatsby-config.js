// https://www.gatsbyjs.org/docs/environment-variables/
const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';
require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const fs = require('fs');
const path = require('path');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const flexfixes = require('postcss-flexbugs-fixes');

const svgSprite = fs.readFileSync(
  path.resolve('./src/sprite.svg'),
  'UTF-8',
);

module.exports = {
  siteMetadata: {
    title: 'システムを考える会社、Gaji-Labo （ガジラボ / がじらぼ）。',
    siteUrl: 'https://www.gaji.jp',
    description:
      'Gaji-Laboは変化や刺激を必要としているチームの「変数」となり、チームワークをスケールさせる会社です。',
    name: 'Gaji-Labo Inc.',
    facebook: 'https://www.facebook.com/gajilabo/',
    twitter: 'https://twitter.com/gaji_labo',
    instagram: 'https://www.instagram.com/gaji_labo/',
    svgSprite,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gaji Labo Inc.',
        short_name: 'Gaji Labo',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#333333',
        display: 'minimal-ui',
        icon: 'src/static/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-figure',
          },
          {
            resolve: 'gatsby-remark-copy-images',
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'src'),
        ],
        cssLoaderOptions: {
          modules: true,
          localIdentName: '[local]--[hash:base64:5]',
        },
        postCssPlugins: [flexfixes, autoprefixer, mqpacker],
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-draft',
      options: {
        timezone: 'Asia/Tokyo',
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-20220676-1',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        exclude: ['/components/', '/components/*'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
      },
    },
    {
      resolve: 'gatsby-plugin-exclude',
      options: { paths: process.env.EXCLUDE_PATH.split(',') },
    },
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'Asia/Tokyo',
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "69ca8b4877a6afd649710594806e7a78bce57f60.hl-a.getshifter.co",
        protocol: "https",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      },
    },
    'gatsby-plugin-offline'
  ],
};
