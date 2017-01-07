'use strict'

var file = {}
file.findMinMax = function(arr) {
  var min = arr[0];
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  if (min === undefined || max === undefined) {
    return [];
  } else if (min === max){
    return [min];
  } else {
    return [min, max]
  }
};

module.exports = file;