const Service = require("egg").Service;
class ChatService extends Service {
    async chat(msg) {
        const {
            app
        } = this;
        
        const arr = `'${Date.parse(new Date())}','${msg.nickName}','${msg.msg}'`;
      
        return await app.mysql.query(`INSERT INTO chat(time,nickName,msg) VALUES(${arr})`);

    }
}
module.exports = ChatService;