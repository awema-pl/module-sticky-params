/**
 * parses simple query string, no nested params name support
 * 
 * @param  {String} queryStr query to parse
 * @return {Object}          name: value parsed params
 * 
 */

export function parseQuery(queryStr) {

    let { get, set } = AWEMA.utils.object,
        params = queryStr.replace(/^\?/, '').split('&'),
        parsed = {};

    if ( queryStr === '' ) return parsed

    params.forEach( param => {
        let [ name, value ] = param.split('=')
        name = decodeURIComponent(name)
        value = decodeURIComponent(value)

        try {
            let _value = JSON.parse(value)
            value = _value
        } catch(e) {}

        // check for array of params
        if ( /\[\]$/.test(name) ) {

            name = name.replace(/\[\]$/, '')

            // check if param already exists
            let _arr = get(parsed, name)

            if ( _arr ) {
                _arr.push(value)
            } else {
                set(parsed, name, [value])
            }

        } else {
            set(parsed, name, value)
        }
    })

    return parsed
}


export function supportsHistory() {
    return window.history && typeof window.history.pushState === 'function'
}

export function supportsLocalStorage() {
    let lsTest = 'lsTest'
    try {
        localStorage.setItem(lsTest, lsTest)
        localStorage.removeItem(lsTest)
        return true
    } catch(e) {
        return false
    }
}


export function restoreFromStorage(name) {
    try {
        let _saved = localStorage.getItem(name)
        return JSON.parse(_saved) || {}
    } catch(e) {
        return {}
    }
}

export function saveToStorage(name, data) {
    window.localStorage.setItem(name, JSON.stringify(data))
}

export function getRouteParams(path, routes) {

    let params = []

    for ( let i = 0; i < routes.length; i++ ) {

        let route = routes[i]

        if ( route.regexp.test(path) ) {

            let _params = Array.isArray(route.params) ? route.params : [route.params]

            if ( _params.indexOf('*') > -1 ) {
                params = '*'
                break;
            }

            params = params.concat( _params )
        }
    }

    return params
}


export function createRoutesFromConfig(config) {

    let _routes = []

    Object.keys(config).forEach( path => {

        let params = config[path]

        _routes.push({
            regexp: new RegExp( '^' + path.replace(/\*/g, '(.*?)') + '$' ),
            params
        })
    })

    return _routes
}