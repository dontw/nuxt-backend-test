# fofadon-backend

> 凤妃堂后台管理

## 环境

本专案运作环境为 [node.js v8.9.3 版](https://nodejs.org/download/release/v8.9.3/)

## 环境变数

| 名称        | 叙述            | 预设值                                                                                        |
| ----------- | --------------- | --------------------------------------------------------------------------------------------- |
| **API**     |
| HOST        | 本专案 IP 位置  | 127.0.0.1                                                                                     |
| PORT        | 本专案 PORT     | 3000                                                                                          |
| API_PWD_KEY | API 的 KEY 值   | "769E18DAFE373A2F8A17B415"                                                                    |
| K_TOKEN     | API 的 TOKEN 值 | "LeedianPlatformToken"                                                                        |
| API_URL     | 账号 API 位置   | <ul><li>dev: "http://192.168.2.215:21000/api/v1"</li><li>alpha: ""</li><li>beta: ""</li></ul> |
| USER_URL    | USER API 位置   | <ul><li>dev: "http://192.168.2.215:21300/api/v1"</li><li>alpha: ""</li><li>beta: ""</li></ul> |

## 安装

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
