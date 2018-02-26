const PREFIX = 'room';

module.exports = () => {
    return async (ctx, next) => {
    
        const { app, socket, logger, helper } = ctx;
        let num =0
        console.log("进入auth")
        await next()
        console.log("离开 auth")
    };
};
