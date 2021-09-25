# uniapp-import-loader
`uniapp import on demand loader` 解决`uniapp`发布为`npm`包时组件与页面都使用`TS`装饰器写时无法成功编译组件的问题。

```shell
$ yarn add -D uniapp-import-loader
```

```javascript
// vue.config.js
const path = require("path");

module.exports = {
    configureWebpack: {
        // ...
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: "uniapp-import-loader", 
                    // import { CCard } from "shst-campus"; 
                    // => import CCard from "shst-campus/lib/c-card/c-card";
                    options: {
                        name: "shst-campus",
                        path: "lib",
                    },
                },
            ],
        },
        // ..
    },
};
```
