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




            const add = await app.mysql.query(`INSERT INTO user (nickName) VALUES('${name}')`);

            //    console.log("-----service-----")
            //     console.log(add)
            //     console.log("-----service-----")
            return {
                status: 0,
                nickName: name
            }
        } else {
            return {
                status: 1,
                nickName: name
            }
        }

    }


}

module.exports = Login