var assert = require("assert");
var stylePrefixer = require('../');

// Mock
stylePrefixer._CACHED_STYLES = {
  '-webkit-transform': true,
  'border-box': true,
  'color': true
};

describe('style-prefixer', function() {
  it('should prefix unprefixed styles', function() {
    var out = stylePrefixer("transform");
    assert.equal(out, "-webkit-transform");
  });

  it('should not prefix styles not needing prefix', function() {
    var out = stylePrefixer("color");
    assert.equal(out, "color");
  });

  it('should remove prefix of not needed', function() {
    var out = stylePrefixer("-webkit-border-box");
    assert.equal(out, "border-box");
  });

  it('should add prefixes to objects', function() {
    var obj = {
      "transform": "scale(0)"
    };
    var out = stylePrefixer(obj);
    assert(obj["-webkit-transform"]);
    assert(!obj["transform"]);
  });

  it('should keep original value if set', function() {
    var obj = {
      "transform": "scale(0)"
    };
    var out = stylePrefixer(obj, true);
    assert(obj["-webkit-transform"]);
    assert(obj["transform"]);
  });
});


