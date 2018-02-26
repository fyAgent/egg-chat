'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,io } = app;
  router.redirect("/","/public/index.html");

  io.of("/chat").route("login",io.controller.login.in);//用户登录 新用户则向数据库添加一条数据
  io.of("/chat").route("sendMsg", io.controller.chat.sendMsg);//发送信息  
};
