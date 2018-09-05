const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'ex-app'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/ex-app-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'ex-app'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/ex-app-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'ex-app'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/ex-app-production'
  }
};

module.exports = config[env];
