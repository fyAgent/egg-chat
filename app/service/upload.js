const Service =require("egg").Service;
const fs = require("fs");
class UpLoadService extends Service{
    async uploadHead(path,buffer,id,url){
      
        const {ctx,app}=this;
        const result = await fs.writeFileSync(path, buffer);
        await app.mysql.query(`UPDATE user SET headImg='${url}' WHERE id='${id}' `);
      
        return result;
    }
}
module.exports = UpLoadService;