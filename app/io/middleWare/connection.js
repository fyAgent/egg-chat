module.exports = app => {
    return async (ctx, next) => {
        console.log("链接")

        await next()
        console.log("断开")


    }
}