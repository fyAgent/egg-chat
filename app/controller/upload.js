const Controller = require("egg").Controller;

const path = require("path");
class Upload extends Controller {
    async img() {
        console.log(1111111111)
        ctx.body="11"

    }
}
module.exports = Upload;