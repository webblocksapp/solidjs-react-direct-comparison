const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias');
const BabelRcPlugin = require('@jackwilsdon/craco-use-babelrc');

const aliasMap = configPaths('./tsconfig.base.json'); // or jsconfig.paths.json

module.exports = {
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/i,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: { alias: aliasMap },
    },
    { plugin: BabelRcPlugin },
  ],
};
