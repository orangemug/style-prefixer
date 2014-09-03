# style-prefixer [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges)
Add only the style prefixes you need


## Usage
If you're in chrome and you pass `transform` it'll add the required prefix

    stylePrefixer("transform");
    // => -webkit-transform

However firefox it'll leave it alone because if supports the unprefixed version.

    stylePrefixer("transform");
    // => transform

Also if your browser supports the prefix it'll remove it

    stylePrefixer("-moz-transform");
    // => transform

It also works on objects

    stylePrefixer({
      "transform": "translateY(-100)",
      "color": "blue"
    });
    // => {"-webkit-transform": "translateY(-100)", "color": "blue"}

Passing true as a second arg will keep the original values in the object

    stylePrefixer({
      "transform": "scale(0)"
    });
    // => {"-webkit-transform": "scale(0)", "transform": "scale(0)"}


## Licence
MIT

