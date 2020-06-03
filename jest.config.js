module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest.preprocess.js`,
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  testRegex: '(\\.(test))\\.(jsx|js)$',
  testPathIgnorePatterns: ['/node_modules/', '/.cache/'],
  modulePaths: ['src'],
  moduleFileExtensions: ['jsx', 'js'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/file-mock.js',
  },
  reporters: ['default', 'jest-junit'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: {
    __PATH_PREFIX__: ``,
  },
};
