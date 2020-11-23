# AWEMA sticky-params component

[![Composer Ready](https://www.awema.pl/awema-pl/module-sticky-params/status.svg)](https://www.awema.pl/)
[![Downloads](https://www.awema.pl/awema-pl/module-sticky-params/downloads.svg)](https://www.awema.pl/)
[![Last version](https://www.awema.pl/awema-pl/module-sticky-params/version.svg)](https://www.awema.pl/)


This is where your description should go. Take a look at [contributing.md](contributing.md) to see a to do list.

## Documentation

[Russian](./docs/index.md)

## NPM scripts

Development mode `npm run watch` or simply `npm start`
Development mode for IE `npm run watch:legacy`
Production build `npm run build`

## Installation

Via Composer

``` bash
$ composer require awema-pl/module-sticky-params
```

The package will automatically register itself.

You can publish the migration with:

```bash
php artisan vendor:publish --provider="AwemaPL\StickyParams\Providers\StickyParamsServiceProvider" --tag="migrations"
```

After the migration has been published you can create the table for StickyParams by running the migrations:

```bash
php artisan migrate
```

You can publish the config file with:

```bash
php artisan vendor:publish --provider="AwemaPL\StickyParams\Providers\StickyParamsServiceProvider" --tag="config"
```

## Contributing

Please see [contributing.md](contributing.md) for details and a todolist.

## Security

If you discover any security related issues, please email :author_email instead of using the issue tracker.

## Credits

- [:author_name][link-author]
- [All Contributors][link-contributors]

## License

GNU General Public License v3.0. Please see the [license file](license.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/awema-pl/module-sticky-params.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/awema-pl/module-sticky-params.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/awema-pl/module-sticky-params/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos/12345678/shield

[link-packagist]: https://packagist.org/packages/awema-pl/module-sticky-params
[link-downloads]: https://packagist.org/packages/awema-pl/module-sticky-params
[link-travis]: https://travis-ci.org/awema-pl/module-sticky-params
[link-styleci]: https://styleci.io/repos/12345678
[link-author]: https://github.com/awema-pl
[link-contributors]: ../../contributors]
