module.exports = app => {
    return async (ctx, next) => {
        console.log(4444)
        
        console.log('packet:', this.packet);
        await next();
        
    };
};