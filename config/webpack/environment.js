// const { environment } = require('@rails/webpacker')
// const { VueLoaderPlugin } = require('vue-loader')
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
// const vue = require('./loaders/vue')

// environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
// environment.plugins.prepend('VuetifyLoaderPlugin', new VuetifyLoaderPlugin())
// environment.loaders.prepend('vue', vue)

// // We need to remove the webpacker preconfigured CSS loader as it conflicts with our own SASS config
// environment.loaders.delete('sass')
// environment.loaders.delete('moduleSass')
// environment.loaders.delete('moduleCss')
// environment.loaders.delete('css')

// environment.loaders.append('scss', {
//     test: /.scss$/,
//     use: [
//         'vue-style-loader',
//         {
//             loader: 'css-loader',
//             options: {
//                 sourceMap: true
//             }
//         },
//         {
//             loader: 'sass-loader',
//             options: {
//                 sourceMap: true,
//                 // data: @import "app/javascript/src/styles/main.scss";
//             }
//         }
//     ]
// })
// environment.loaders.append('sass', {
//     test: /.sass$/,
//     use: [
//         'vue-style-loader',
//         {
//             loader: 'sass-loader'
//         },
//         {
//             loader: 'css-loader',
//             options: {
//                 sourceMap: true
//             }
//         },
//     ]
// })

// module.exports = environment

// const { environment } = require('@rails/webpacker')
// const { VueLoaderPlugin } = require('vue-loader')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const { config } = require('@rails/webpacker')


// environment.loaders.append('i18n-yml', {
//   test: /i18n\/\S+\.yml$/i,
//   use: [
//     'json-loader',
//     'yaml-loader'
//   ]
// })

// environment.loaders.append('vue', {
//   test: /\.vue(\.erb)?$/,
//   use: [{
//     loader: 'vue-loader',
//     options: {
//       preLoaders: {
//         i18n: 'yaml-loader'
//       },
//       loaders: {
//         i18n: '@kazupon/vue-i18n-loader'
//       }
//     }
//   }]
// })

// environment.loaders.append('sass', {
//   test: /\.sass$/,
//   use: [
//     config.extract_css === false
//       ? 'vue-style-loader'
//       : MiniCssExtractPlugin.loader,
//     {
//       loader: 'css-loader',
//       options: {
//         sourceMap: true,
//         importLoaders: 2
//       }
//     },
//     {
//       loader: 'sass-loader',
//       options: {
//         sourceMap: true,
//         implementation: require('sass'),
//         fiber: require('fibers'),
//         // data: `@import "app/javascript/manager/styles/main.scss"`,
//         // indentedSyntax: true
//       }
//     }
//   ]
// })

// environment.loaders.append('scss', {
//   test: /\.scss$/,
//   use: [
//     config.extract_css === false
//       ? 'vue-style-loader'
//       : MiniCssExtractPlugin.loader,
//     {
//       loader: 'css-loader',
//       options: {
//         sourceMap: true,
//         importLoaders: 2
//       }
//     },
//     {
//       loader: 'postcss-loader',
//       options: {
//         sourceMap: true
//       }
//     },
//     {
//       loader: 'sass-loader',
//       options: {
//         sourceMap: true,
//         implementation: require('sass'),
//         fiber: require('fibers'),
//         data: `@import "app/javascript/manager/styles/main.scss";`
//       }
//     }
//   ]
// })

// environment.plugins.append('MiniCssExtractPlugin', new MiniCssExtractPlugin({
//   filename: 'css/[name]-[contenthash:8].css',
//   chunkFilename: 'css/[name]-[contenthash:8].chunk.css'
// }))
// environment.plugins.append('VueLoaderPlugin', new VueLoaderPlugin())
// environment.plugins.prepend('VuetifyLoaderPlugin', new VuetifyLoaderPlugin())

// module.exports = environment


const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { config } = require('@rails/webpacker')

// We need to remove the webpacker preconfigured CSS loader as it conflicts with our own SASS config
environment.loaders.delete('css')

environment.loaders.append('i18n-yml', {
  test: /i18n\/\S+\.yml$/i,
  use: [
    'json-loader',
    'yaml-loader'
  ]
})

environment.loaders.append('vue', {
  test: /\.vue(\.erb)?$/,
  use: [{
    loader: 'vue-loader',
    options: {
      preLoaders: {
        i18n: 'yaml-loader'
      },
      loaders: {
        i18n: '@kazupon/vue-i18n-loader'
      }
    }
  }]
})

environment.loaders.append('sass', {
  test: /\.sass$/,
  use: [
    config.extract_css === false
      ? 'vue-style-loader'
      : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        implementation: require('sass'),
        // fiber: require('fibers'),
        // data: `@import "app/javascript/manager/styles/main.scss"`,
        sassOptions: { indentedSyntax: true }
      }
    }
  ]
})

environment.loaders.append('scss', {
  test: /\.scss$/,
  use: [
    config.extract_css === false
      ? 'vue-style-loader'
      : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        implementation: require('sass'),
        fiber: require('fibers'),
        data: `@import "app/javascript/manager/styles/main.scss";`
      }
    }
  ]
})

environment.plugins.append('MiniCssExtractPlugin', new MiniCssExtractPlugin({
  filename: 'css/[name]-[contenthash:8].css',
  chunkFilename: 'css/[name]-[contenthash:8].chunk.css'
}))
environment.plugins.append('VueLoaderPlugin', new VueLoaderPlugin())
environment.plugins.prepend('VuetifyLoaderPlugin', new VuetifyLoaderPlugin())

module.exports = environment
