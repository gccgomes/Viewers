const path = require('path');
// ~~ Plugins
const PnpWebpackPlugin = require(`pnp-webpack-plugin`); // Required until Webpack@5

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      plugins: [PnpWebpackPlugin],
      // Note the '..' in the path because docz gatsby project lives in the '.docz' directory
      modules: [
        // monorepo root
        path.resolve(__dirname, '../../../node_modules'),
        // platform/ui
        path.resolve(__dirname, '../node_modules'),
        // .docz
        'node_modules',
      ],
      // resolve: {
      //   symlinks: true,
      // },
    },
    resolveLoader: {
      plugins: [PnpWebpackPlugin.moduleLoader(module)],
    },
  });
};
