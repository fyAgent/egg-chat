const room = ["default"] //房间
module.exports = () => {
    return async (ctx, next) => {
        const {
            app,
            socket,
            logger,
            helper
        } = ctx;
      


        // console.log(socket.id)
        console.log("进入room");
        await next()
        const token = ctx.socket.id.split("#")[1];
        console.log("离开room");
        const user = await app.mysql.query(`SELECT * FROM user WHERE token = '${token}'`);
        if(user[0]){
           const info =user[0]
            
            ctx.socket.in(room[0]).broadcast.emit("leaveRoom", info);
        }
    }
}