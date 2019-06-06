const path = require('path');
const ip = require('ip');

exports.development = {
  ignoreDirs: [ 'app/web', 'public', 'config' ],
};

exports.sequelize = {
  database: 'miniapp-backend',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: '123456',
};

exports.redis = {
  client: {
    host: '127.0.0.1',
    port: 6379,
    password: '',
    db: 0,
  },
  agent: true,
};

exports.webpack = {
  webpackConfigList: [
    path.join(__dirname, '../webpack/client/webpackDevConfig'),
    path.join(__dirname, '../webpack/server/webpackDevConfig'),
  ],
};

const localIP = ip.address();
const domainWhiteList = [];
[ 9000, 9001, 9002, 4000 ].forEach(port => {
  domainWhiteList.push(`http://localhost:${port}`);
  domainWhiteList.push(`http://127.0.0.1:${port}`);
  domainWhiteList.push(`http://${localIP}:${port}`);
});

exports.security = { domainWhiteList };
