'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1518614221862_2409';

  // add your config here
  config.middleware = [];

  config.io = {
    init: {

    },
    namespace: {

      '/': {

        connectionMiddleware: ['auth'],
        packetMiddleware: ["packet"]
      },
      "/example": {
        connectionMiddleware: ["connection"],
        packetMiddleware: []
      },
      "/chat": {
        connectionMiddleware: ["connection", "room"],
        packetMiddleware: []
      }

    }
  }
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'socket',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
  

  return config;
};