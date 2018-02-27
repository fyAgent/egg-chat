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

        
        if (!result) { //数据库没有 新用户
            const len=await app.mysql.query(`SELECT * FROM user`);
            const id = len[len.length-1].id;
            ctx.session.userInfo={//1天session
                id,
                nickName:name
            };

            const add = await app.mysql.query(`INSERT INTO user (nickName) VALUES('${name}')`);

           
            return {
                status: 0,
                nickName: name
            }
        } else {//老用户 存session
          
            console.log(result)
            console.log("1111111111111")
            ctx.session.userInfo=1;

            return {
                status: 1,
                nickName: name
            }
        }

    }


}

module.exports = Login