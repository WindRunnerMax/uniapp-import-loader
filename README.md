# uniapp-import-loader
`uniapp import on demand loader` 解决`uniapp`发布为`npm`包时组件与页面都使用`TS`装饰器写时无法成功编译组件的问题。

```shell
$ yarn add -D uniapp-import-loader
```

## webpack-loader

`webpack-loader`的解决方案，与`babel-plugin`解决方案二选一，需要配置`vue.config.js`，详细配置可以查看`https://github.com/SHST-SDUST/SHST-PLUS/blob/master/vue.config.js`。

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

## babel-plugin

`babel-plugin`的解决方案，与`webpack-loader`解决方案二选一，需要配置`babel.config.js`，详细配置可以查看`https://github.com/SHST-SDUST/SHST-PLUS/blob/master/babel.config.js`。

```javascript
// ...
process.UNI_LIBRARIES = ["shst-campus"];
plugins.push([
    require("uniapp-import-loader/dist/babel-plugin-dynamic-import"),
    {
        libraryName: "shst-campus",
        libraryPath: "lib",
    },
    // import { CCard } from "shst-campus";
    // => import CCard from "shst-campus/lib/c-card/c-card";
]);
// ...
```