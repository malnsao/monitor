# monitor

前端监控

cnpm i webpack webpack-cli html-webpack-plugin user-agent webpack-dev-server -D

分为稳定性和用户体验

稳定性

1、监听 JS 错误 比如：window.a.error
2、监听 promise 错误 reject、window.a.error
3、监听资源加载错误
思路：
设计监控数据结构
捕获 event 错误信息
获取最后一次操作元素

4、接口监控
思路：
设计监控数据
重写 open 方法
重写 send 方法
在 send 监听 load、error、abort

5、白屏
思路
通过 elementsFromPoint 方法获取当前视口内指定坐标处，由里到外排列的所有元素
通过屏幕中间横竖各 9 个点，加载之后完成判断这 18 个点是否在 html 或 body 或 root 上

用户体验
思路
获取从浏览器输入 url 到页面渲染各个时间段
前一个页面卸载耗时、重定向、缓存、DNS、TCP、request、response、处理、加载

搭建监控服务器
https://cdn.nlark.com/yuque/0/2022/png/433718/1651318624562-132ce7d4-12d9-4932-8fa2-f630e20bb773.png
