import { 
    supportsHistory,
    supportsLocalStorage,
    parseQuery,
    restoreFromStorage,
    saveToStorage,
    getRouteParams,
    createRoutesFromConfig
} from './helpers'


/**
 * StickyParams constructor
 * 
 * @return {Object} self
 */
export const StickyParams = function( config ) {

    this.inited = false


    let obj = AWEMA.utils.object
    const LS_NAME = 'awema-sticky-params-' + window.location.hostname


    // check requirements
    if ( ! obj.isObject(config) || obj.isEmpty(config) || ! supportsHistory() || ! supportsLocalStorage() ) {
        return this
    }


    // create config
    this.routes = createRoutesFromConfig(config)


    // restore params from localStorage
    this.saved = restoreFromStorage(LS_NAME)


    this.inited = true
    // initial call
    this.update()


    // init listeners
    window.addEventListener('popstate', this.update.bind(this))
    window.addEventListener('beforeunload', () => {
        this.update()
        saveToStorage(LS_NAME, this.saved)
    })

    return this
}



/**
 * Merge current params with saved, or save params if path did not change
 * 
 * @return {Object} self
 */
StickyParams.prototype.update = function() {

    if ( ! this.inited ) return this

    let util = AWEMA.utils,
        obj = util.object,
        loc = window.location,
        path = loc.pathname,
        query = parseQuery(loc.search),
        watchParams = getRouteParams(path, this.routes)
    
    if ( this._path === path ) {

        // update saved params
        
        if ( watchParams === '*' ) {
            obj.set(this.saved, path, query)
        } else {

            let _params = {}

            watchParams.forEach( param => {
                let _val = obj.get(query, param)
                obj.set(_params, param, _val)
            })

            obj.set(this.saved, path, _params)
        }

    } else {

        // restore saved params

        let _saved = obj.get(this.saved, path, {}),
            _query = Object.assign(_saved, query),
            _strQuery = obj.isEmpty(_query) ? '' : '?' + util.stringifyQuery(_query)
        
        let url = loc.origin + loc.pathname + _strQuery + loc.hash

        window.history.replaceState(window.history.state, document.title, url)
    }

    this._path = path

    return this
};