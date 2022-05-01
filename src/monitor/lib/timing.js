import getLastEvent from "../utils/getLastEvent";
import getSelector from "../utils/getSelector";
import tracker from "../utils/tracker"
import onLoad from "./onLoad";

export function timing() {
    let FMP, LCP;
    new PerformanceObserver((entryList, ovserver) => {
        let perfEntries = entryList.getEntries()
        FMP = perfEntries[0];
        ovserver.disconnect()
    }).observe({ entryTypes: ['element'] })

    new PerformanceObserver((entryList, ovserver) => {
        let perfEntries = entryList.getEntries()
        LCP = perfEntries[0];
        ovserver.disconnect()
    }).observe({ entryTypes: ['largest-contentful-paint'] })

    new PerformanceObserver((entryList, ovserver) => {
        let lastEvent = getLastEvent()
        let firstInput = entryList.getEntries()[0];
        if (firstInput) {
            // processingStart开始处理时间 startTime开始点击的时间 差值就是处理的延迟
            let inputDelay = firstInput.processingStart - firstInput.startTime;
            // 处理的耗时
            let duration = firstInput.duration;
            if (inputDelay > 0 || duration > 0) {
                tracker.send({
                    /** 监控指标大类 */
                    kind: 'experience',
                    /** 监控指标小类型 */
                    type: 'firstInputDelay',// 首次输入延迟
                    /** 延时的时间 */
                    inputDelay,
                    /** 处理的时间 */
                    duration,
                    startTime: firstInput.startTime,
                    selector: lastEvent ? getSelector(lastEvent.path || lastEvent.target) : ''
                })
            }
        }
        ovserver.disconnect()
    }).observe({ entryTypes: ['first-input'], buffered: true })
    onLoad(function () {
        setTimeout(() => {
            const {
                fetchStart,
                connectStart,
                connectEnd,
                requestStart,
                responseStart,
                responseEnd,
                domLoading,
                domInteractive,
                domContentLoadedEventStart,
                domContentLoadedEventEnd,
                loadEventStart
            } = performance.timing;

            tracker.send({
                /** 监控指标大类 */
                kind: 'experience',
                /** 监控指标小类型 */
                type: 'timing',
                /** 连接时间 */
                connectTime: connectEnd - connectStart,
                /** 首字节到达时间 */
                ttfbTime: responseStart - requestStart,
                /** 响应时间 */
                responseTime: responseEnd - responseStart,
                /** DOM解析时间 */
                parseDOMtime: loadEventStart - domLoading,
                /** dom加载时间 */
                domContentLoaded: domContentLoadedEventEnd - domContentLoadedEventStart,
                /** 首次可交互时间 */
                timeToInteractice: domInteractive - fetchStart,
                /** 完整加载时间 */
                loadTime: loadEventStart - fetchStart,
            })
            let FP = performance.getEntriesByName('first-paint')[0]
            let FCP = performance.getEntriesByName('first-contentful-paint')[0]

            tracker.send({
                /** 监控指标大类 */
                kind: 'experience',
                /** 监控指标小类型 */
                type: 'paint',
                /** 首次绘制时间 */
                firstPaint: FP.startTime,
                /** 首次内容绘制时间 */
                firstContentfulPaint: FCP.startTime,
                /** 首次有意义绘制时间 */
                firstMeaningfulPaint: FMP.startTime,
                /** 最大内容绘制时间 */
                largestContentfulPaint: LCP.startTime,
            })
        }, 3000)
    })

}