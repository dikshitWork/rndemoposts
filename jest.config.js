module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/?!((jest-)?react-native|react-redux)',
  ],
  setupFiles: ['./setupTests.js'],
};
