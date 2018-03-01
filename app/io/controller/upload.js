const Controller = require("egg").Controller;

const path = require("path");
class Upload extends Controller {
    async img() {
        const {
            app,
            ctx
        } = this;

        const message = ctx.args[0] || "";
        const req = ctx.args[0]; //获取请求参数

        const {
            userInfo,
            msg
        } = req;
        const fileName = `${userInfo.nickName}_${userInfo.id}_${parseInt(Math.random() * 1000000)}.${msg.typ}`;
        const _path = path.join(//写入文件路径
            app.baseDir,
            `/app/public/headImg/${fileName}`
        );
        const cluster = app.config.cluster.listen;//监听配置
        const host = cluster.hostname || "127.0.0.1";
        const port = cluster.port || "80";
        
        const imgUrl = `/public/headImg/${fileName}`
      
        const base64 = msg.base64.replace(/^data:image\/\w+;base64,/, "");
        const buffer = new Buffer(base64, 'base64');

        const result = await ctx.service.upload.uploadHead(_path, buffer, userInfo.id, imgUrl);



    }
}
module.exports = Upload;