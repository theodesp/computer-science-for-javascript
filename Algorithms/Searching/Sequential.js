
(function (exports) {
/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**
* Searches sequentially the unordered list a for x.
* Returns the position if found or -1 otherwise.
* @module Algorithms
* @submodule Searching 
* @param {Array} list An unordered list
* @param {Number} item The element to search for
* @param {Function} cmp A custom comparison function that compares the values of the items
* @return {Number} The position found or -1 otherwise
*
* @example
*   Sequential([23, 5, 8, 99, 0, -3], 98); ==>-1
*       
*/

function Sequential(list, item, cmp) {
    cmp = cmp || _cmp;
    var l = list.length;
    for (var i = 0; i < l; i += 1) {
        if (cmp(list[i] , item) === 0) {
            return i;
        }
    }
    if (i === list.length) { // we reached the end
        return -1;
    }
    return -1;
}

function _cmp(a, b) {
    return a - b;
}

exports.Sequential = Sequential;

}(typeof exports === 'undefined' ? window : exports));
