import tracker from "../utils/tracker"
import onLoad from "./onLoad";

export function blankScreen() {
    let wrapperElements = ['html', 'body', '#container', '.content'];
    let emptyPonits = 0

    function getSelector(element) {
        if (element) {
            if (element.id) {
                return `#${element.id}`
            } else if (element.className) {
                return `.${element.className.split(' ').filter(item => !!item).join('.')}`
            } else {
                return element.nodeName.toLowerCase()
            }
        }
    }

    function isWrapper(element) {
        let selector = getSelector(element)
        if (wrapperElements.indexOf(selector) != -1) {
            emptyPonits++
        }
    }
    onLoad(function () {
        for (let i = 1; i <= 9; i++) {
            let xElements = document.elementsFromPoint(window.innerWidth * i / 10, window.innerHeight / 2)
            let yElements = document.elementsFromPoint(window.innerHeight * i / 10, window.innerWidth / 2)
            isWrapper(xElements[0])
            isWrapper(yElements[0])

        }

        if (emptyPonits > 16) {
            tracker.send({
                /** 监控指标大类 */
                kind: 'stability',
                /** 监控指标小类型 */
                type: 'blank',
                /** 空白点 */
                emptyPonits,
                /** 屏幕宽度 */
                screen: window.screen.width + 'X' + window.screen.height,
                /** 可视宽度 */
                viewPoint: window.innerWidth + 'X' + window.innerHeight,

            })
        }
    })

}