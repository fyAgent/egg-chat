const Controller = require("egg").Controller;
const room = ["default"] //房间
class Login extends Controller {
    async in () {

        const {
            app,
            ctx
        } = this;
        
        await ctx.socket.join(room[0]); //进入默认房间
        
        const {
            name
        } = ctx.args[0];

        const response = await ctx.service.login.in(name) //这里把处理丢到service里处理了 其实 io目录下没有service目录 应该是直接在controller里处理也是可以的
        
        ctx.socket.emit("loginRes", response); //0 新用户  1 老用户
        ctx.socket.in(room[0]).broadcast.emit("joinRoom", {
            nickName: name
        });

    }
}
module.exports = Login