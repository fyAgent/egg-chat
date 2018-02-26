module.exports = app => {
    return async (ctx, next)=>{
        console.log("链接")
        
        await next()
        console.log("失去链接")

    }
}