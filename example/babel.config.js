const glamor = require('glamor/babel');

module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        useBuiltIns: true,
      },
    ],
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'Glamor.createElement',
      },
    ],
    // Glamor doesn't ship a Babel 7 compliant plugin.
    () => glamor,
  ],
};
