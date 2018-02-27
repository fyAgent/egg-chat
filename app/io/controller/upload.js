const Controller=require("egg").Controller;
class Upload extends Controller{
    async img(){
        const {app,ctx}=this;
        const message = ctx.args[0] || "";
        console.log(ctx.session.userInfo)
       
    }
}
module.exports=Upload;