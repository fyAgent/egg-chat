const Controller = require('egg').Controller;

class NspController extends Controller {
    async exchange() {
        console.log("into exchange")
        const { ctx, app } = this;
        const nsp = app.io.of('/example');

        const message = ctx.args[0] || {};
        console.log(`-------------------------------------------------`)
        // console.log(message);
        app.io.emit("response", ctx.args)
        console.log(`-------------------------------------------------`)
        const socket = ctx.socket;
        const client = socket.id;

        try {
            const { target, payload } = message;
            if (!target) return;
            const msg = ctx.helper.parseMsg('exchange', payload, { client, target });
            nsp.emit(target, msg);
        } catch (error) {
            app.logger.error(error);
        }
    }
}

module.exports = NspController;
