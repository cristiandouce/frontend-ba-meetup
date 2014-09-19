/**
 * Module dependencies.
 */

var _ = require('lodash/lodash');

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
