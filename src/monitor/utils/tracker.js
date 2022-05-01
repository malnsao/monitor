let userAgent = require('user-agent')
function getExtraData() {
    return {
        /** 报错页面 */
        title: document.title,
        /** 报错地址 */
        url: location.href,
        /** 报错时间 */
        timestamp: Date.now(),
        /** 用户信息 */
        userAgent: userAgent.parse(navigator.userAgent)
    }
}
class Tracker {
    constructor() {
        this.url = '';
        this.xhr = new XMLHttpRequest;
    }
    send(data = {}) {
        let extraData = getExtraData()
        let log = { ...extraData, ...data }
        console.log(log, '上报日志')
        // this.xhr.open('POST', this.url, true);
        // let body = JSON.stringify(data);
        // this.xhr.send(body)
    }
}

export default new Tracker()