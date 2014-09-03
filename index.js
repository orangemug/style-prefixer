var PREFIXES = [
  "-webkit-",
  "-moz-",
  "-ms-",
  "-o-"
];
var PREFIXES_LEN = PREFIXES.length;

/**
 * Prefix (or unprefix) a css property
 *
 * @param {String} property
 * @return {String} altered property
 */
function prefixProperty(property) {
  var rule;
  var unprefixedStr = property.replace(/-(webkit|moz|ms|o)-/, "");

  // Should this be unprefixed?
  if(prefix._CACHED_STYLES.hasOwnProperty(unprefixedStr)) {
    return unprefixedStr;
  }

  // Should this be prefixed
  for(var i=0; i<PREFIXES_LEN; i++) {
    rule = PREFIXES[i]+unprefixedStr;

    if(prefix._CACHED_STYLES.hasOwnProperty(rule)) {
      return rule;
    }
  }

  // If we don't find a match assume the user is correct
  return property;
}


function prefix(obj, keepOriginal) {
  if(typeof(obj) === "string") {
    return prefixProperty(obj);
  } else {
    var p, k;
    for(k in obj) {
      if(p=prefixProperty(k)) {
        obj[p] = obj[k];

        if(!keepOriginal) {
          delete obj[k];
        }
      }
    }
    return obj;
  }
}

// Making this available to tests
prefix._CACHED_STYLES = require("./lib/cached-styles");

module.exports = prefix;
