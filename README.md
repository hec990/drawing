### 前言
- 在线预览：
- 针对用户：PC端、ipad

### 一、二次开发

#### 安装

```bash
npm i -g parcel
```

&&

```
yarn global add parcel
```

#### 启用

```
parcel build src/index.html --no-minify --public-url ./
```

### 二、屏幕适配

#### iphone5 && iphone6\7\8 && iphone6\7\8 plus && ipad

- iphone5 没有做适配
- iphone6\7\8 和 iphone6\7\8 plus 做了适配，去除了笔刷调整粗体功能
- ipad适配

### 三、项目开发进度

- [x] 移动端功能呈现
- [ ] 保存（画板有内容则下载保存，无内容则提示请画画）
- [ ] 解决屏幕尺寸变化，画板内容消失的问题
- [ ] 撤销功能



