"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require("cheerio");
const inky_1 = require("inky");
const fs = require("fs");
const juice = require("juice");
class Inky {
    constructor() {
        this.css = '';
    }
    addStyle(style) {
        this.css += String(fs.readFileSync(style));
    }
    setHtml(html) {
        this.html = html;
    }
    convert(options = {}, cheerioOpts = { decodeEntities: true }) {
        const i = new inky_1.Inky(options);
        const html = cheerio.load(this.html);
        let result = i.releaseTheKraken(html, cheerioOpts);
        result = juice(result, { extraCss: this.css });
        this.setHtml('');
        this.css = '';
        return result;
    }
}
exports.Inky = Inky;
//# sourceMappingURL=plugin.js.map