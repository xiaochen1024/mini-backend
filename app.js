const path = require("path");

module.exports = async app => {
  app.beforeStart(async () => {
    // await app.model.sync({ force: true }); // 开发环境使用
    await app.model.sync({});
  });

  app.ready(async () => {});
};
