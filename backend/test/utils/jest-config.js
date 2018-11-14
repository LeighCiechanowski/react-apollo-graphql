module.exports = {
    rootDir: `${__dirname}/../../`,
    verbose: true,
    bail: true,
    testMatch: ['/**/*-test.js'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/dist_test/'],
  };
  