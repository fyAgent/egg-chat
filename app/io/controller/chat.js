const Controller=require("egg").Controller;
const rooms=["default"]
class Chat extends Controller{
    async sendMsg(){
        const {ctx,app }=this;

        const msg=ctx.args[0];
        const nsp=app.io.of("/chat");
        await ctx.service.chat.chat(msg);//存数据库

        nsp.in(rooms[0]).emit("getMsg",msg);

    }
}
module.exports=Chat;