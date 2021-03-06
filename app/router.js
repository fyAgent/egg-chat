'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,io } = app;
  router.redirect("/","/public/index.html");
  router.post("uploadFile", controller.upload.img);

  io.of("/chat").route("login",io.controller.login.in);//用户登录 新用户则向数据库添加一条数据
  io.of("/chat").route("sendMsg", io.controller.chat.sendMsg);//发送信息  
  io.of("/chat").route("upload", io.controller.upload.img);//上传用户头像

};
