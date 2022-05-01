import getLastEvent from "../utils/getLastEvent"
import getSelector from "../utils/getSelector"
import tracker from "../utils/tracker"

export function injectJsError() {
    window.addEventListener('error', function (event) {
        if (event.target && (event.target.src || event.target.href)) {
            let log = {
                /** 监控指标大类 */
                kind: 'stability',
                /** 监控指标小类型 */
                type: 'error',
                /** 资源加载错误 */
                errorType: 'resourceError',
                /** 报错文件 */
                fileName: event.target.src || event.target.href,
                /** 标签名 */
                tagName: event.target.tagName,
                /** 最后一个操作的元素 */
                selector: getSelector(event.target)
            }
            tracker.send(log)
        } else {
            let lastEvent = getLastEvent()
            let log = {
                /** 监控指标大类 */
                kind: 'stability',
                /** 监控指标小类型 */
                type: 'error',
                /** JS错误 */
                errorType: 'jsError',
                /** 报错信息 */
                message: event.message,
                /** 报错文件 */
                fileName: event.filename,
                /** 报错行列 */
                position: `${event.lineno}:${event.colno}`,
                /** 报错栈 */
                stack: getEventListeners(event.error.stack),
                /** 最后一个操作的元素 */
                selector: lastEvent ? getSelector(lastEvent.path) : ''
            }
            tracker.send(log)
        }
    }, true)

    window.addEventListener('unhandledrejection', (event) => {
        let lastEvent = getLastEvent();
        let message;
        let fileName;
        let line = 0;
        let column = 0;
        let stack = '';
        let reason = event.reason;

        if (typeof reason === 'string') {
            message = reason
        } else if (typeof reason === 'object') {
            if (reason.stack) {
                let matchResult = reason.stack.match(/at\s+(.+):(\d+):(\d+)/)
                fileName = matchResult[1]
                line = matchResult[2]
                column = matchResult[3]
                stack = getEventListeners(stack)
                message = reason.message
            }
        }
        let log = {
            /** 监控指标大类 */
            kind: 'stability',
            /** 监控指标小类型 */
            type: 'error',
            /** promise错误 */
            errorType: 'PromiseError',
            /** 报错信息 */
            message,
            /** 报错文件 */
            fileName,
            /** 报错行列 */
            position: `${line}:${column}`,
            /** 报错栈 */
            stack,
            /** 最后一个操作的元素 */
            selector: lastEvent ? getSelector(lastEvent.path) : ''
        }
        tracker.send(log)
    })

    function getEventListeners(stack) {
        return stack.split('\n').slice(1).map((item) => item.replace(/^\s+at\s+/g, '')).join('^')
    }
}