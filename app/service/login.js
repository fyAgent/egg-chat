
const Service = require("egg").Service;
class Login extends Service {
    async in (name) {
        const {
            ctx,
            app
        } = this
        const result = await app.mysql.get("user", {
            nickName: name
        })
        const token=ctx.socket.id.split("#")[1] //暂时未找到在socket下储存cookie、session的有效办法先用这个代替；

       
        if (!result) { //数据库没有 新用户
            const len = await app.mysql.query(`SELECT * FROM user`)
        
            const id = len.length ? len[len.length - 1].id : 0;//这里有可能会有Bug 数据库清空后id是保存的
           
            const headImg= '/public/image/head/head.jpg';
            const add = await app.mysql.query(`INSERT INTO user (nickName,headImg,token) VALUES('${name}','${headImg}','${token}')`);

            return {
                status : 0,
                nickName:name,
                headImg,
                id
            }
        } else { //老用户 存session

            await app.mysql.query(`UPDATE user SET token='${token}' WHERE id='${result.id}'`);//更新token
            return Object.assign({
                status: 1

            }, result)
        }

    }


}

module.exports = Login