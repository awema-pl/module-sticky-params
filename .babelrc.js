const isModern = process.env.BROWSERS_ENV === 'modern';

module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      // debug: true,
      exclude: [
        'es6.array.iterator',
        'es6.symbol',
        'es7.symbol.async-iterator',
        'es6.object.assign',
        'es6.object.to-string',
        'es6.regexp.split',
        'es6.regexp.replace',
        'es6.regexp.search',
        'web.dom.iterable'
      ],
      targets: isModern ? { esmodules: true } : undefined,
    }]
  ]
};
