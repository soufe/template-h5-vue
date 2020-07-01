# tmpl-h5-vue

## 简介
> 移动端项目模版

## 环境
> **node** => v12.16.3

> **@vue/cli** => v4.4.6

## 技术栈
>  [vue](https://cn.vuejs.org/v2/guide/) + [vuex](https://vuex.vuejs.org/zh/) + [vue-router](https://router.vuejs.org/zh/) +  [ts](https://typescript.bootcss.com) + [vant](https://vant-contrib.gitee.io/vant/#/zh-CN/)

## 约定
- `详情` 参考 [语雀](https://cn.vuejs.org/v2/style-guide/) 对应说明

## 项目目录
```
├── LICENSE
├── README.md
├── babel.config.js
├── commitlint.config.js
├── output.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── api
│   │   ├── eg.ts
│   │   └── index.ts
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── Eg.vue
│   │   └── Ts.vue
│   ├── main.ts
│   ├── router
│   │   └── index.ts
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── actions.ts
│   │   ├── getters.ts
│   │   ├── index.ts
│   │   ├── mutation-types.ts
│   │   └── mutations.ts
│   ├── utils
│   │   ├── client.ts
│   │   ├── error.ts
│   │   ├── http.ts
│   │   ├── mixins.ts
│   │   └── wxshare.ts
│   └── views
│       └── Index.vue
├── tsconfig.json
└── vue.config.js
```

## License
```
The MIT License (MIT)

Copyright (c) 2019 SouFe

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```