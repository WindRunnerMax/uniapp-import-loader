const { transform } = require("../dist/index");

// loader function
module.exports = function (source) {
    const name = this.query.name;
    if (!name) return source;
    const path = this.query.path || "lib";
    const main = this.query.main;
    const done = this.async();
    transform(source, { name, path, main }).then(res => {
        done(null, res);
    });
};
