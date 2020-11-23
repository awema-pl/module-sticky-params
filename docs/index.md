# Sticky params plugin

This plugin allows to save specific GET-params for best user experience. For example, to save table rows limit or sorting order, so when the user returns to the given page, provided parameters will be restored.

This plugin depends on [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History) and [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). This is also a javascript plugin, so it requires javascript to be enabled in user's browser


## Configuration

This plugin requires a configuration field `stickyParams` in global `AWEMA_CONFIG`, it will not initialize without config

```javascript

const AWEMA_CONFIG = {
    key: 'API_KEY',

    stickyParams: {

        // all pages stores the `limit` param
        '*': 'limit', 

        // `/contacts` page stores `provider` and `tab` params, additionally to `limit`
        '/contacts': ['provider', 'tab'], 

        // all pages like '/account/', '/account/orders', etc. will store all given params
        '/account/*': '*'
    }
}
```


## Methods

The plugin watches page `load/unload` events and history `popstate` event to store and update params automatically. If no update happens for some reason, you may use `update()` method

```javascript

AWEMA.StickyParams.update()
```