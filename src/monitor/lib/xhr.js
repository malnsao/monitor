import tracker from "../utils/tracker"
export function injectXHR() {
    let XMLHttpRequest = window.XMLHttpRequest;
    let oldOpen = XMLHttpRequest.prototype.open;
    let oldSend = XMLHttpRequest.prototype.send

    XMLHttpRequest.prototype.open = function (method, url, async) {
        if (!url.match(/sockjs/)) {
            this.logData = { method, url, async }
        }
        return oldOpen.apply(this, arguments)
    }
    XMLHttpRequest.prototype.send = function (body) {
        if (this.logData) {
            let startTime = Date.now();
            const handler = (type) => (event) => {
                let duration = Date.now() - startTime;
                let status = this.status;
                let statusText = this.statusText;
                tracker.send({
                    /** 监控指标大类 */
                    kind: 'stability',
                    /** 监控指标小类型 */
                    type: 'xhr',
                    /** 监听类型 */
                    eventType: type,
                    /** 接口路径 */
                    pathName: this.logData.url,
                    /** 状态 */
                    status: `${status} - ${statusText}`,
                    /** 持续时间 */
                    duration,
                    /** 响应体 */
                    response: this.response ? JSON.stringify(this.response) : '',
                    /** 入参 */
                    params: body || ''
                })
            }

            this.addEventListener('load', handler('load'), false)
            this.addEventListener('error', handler('error'), false)
            this.addEventListener('abort', handler('abort'), false)

        }
        return oldSend.apply(this, arguments)

    }
}