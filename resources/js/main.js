import { name, version } from '../../package.json'
import { StickyParams } from './modules/sticky-params'

const awemaPlugin = {

    name, version,

    // modules: {
    //     'path-to-regexp': 'https://cdn.jsdelivr.net/npm/path-to-regexp/index.min.js'
    // },

    install() {
        AWEMA.StickyParams = new StickyParams(AWEMA_CONFIG.stickyParams)
    }
}

if (window && ('AWEMA' in window)) {
    AWEMA.use(awemaPlugin)
} else {
    let s = '__awema_plugins_stack__'
    window[s] = window[s] || []
    window[s].push(awemaPlugin)
}