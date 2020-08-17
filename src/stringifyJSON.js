// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var strung = '';
  if (typeof obj === 'string') {
    strung += `"${obj}"`;
  } else if (typeof obj === 'number') {
    strung += obj;
  } else if (typeof obj === 'boolean') {
    strung += `${obj}`;
  } else if (obj === null) {
    strung += 'null';
  } else if (obj === undefined) {
    strung += 'undefined';
  } else if (Array.isArray(obj)) {
    strung += `[${obj.map(stringifyJSON)}]`;
  } else if (typeof obj === 'object') {
    strung += '{';
    let keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== 'functions' && keys[i] !== 'undefined') {
        strung += stringifyJSON(keys[i]);
        strung += ':';
        strung += stringifyJSON(obj[keys[i]]);
        if (i !== keys.length - 1) {
          strung += ',';
        }
      }

    }
    strung += '}';
  }

  return strung;
};