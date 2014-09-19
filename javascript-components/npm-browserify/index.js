/**
 * Module dependencies.
 */

var _ = require('lodash');

/**
 * Expose multiplyByThree
 */

module.exports = multiplyByThree;

function multiplyByThree(arr) {
  return _.map(arr, mutiplier);
}

function mutiplier(num) {
  return num * 3;
}
