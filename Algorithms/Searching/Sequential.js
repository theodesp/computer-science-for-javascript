
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
* @return {Number} The position found or -1 otherwise
*
* @example
*   Sequential([23, 5, 8, 99, 0, -3], 98); ==>-1
*       
*/

function Sequential(list, item) {
    var l = list.length;
    for (var i = 0; i < l; i += 1) {
        if (list[i] === item) {
            return i;
        }
    }
    if (i === list.length) { // we reached the end
        return -1;
    }
}

exports.Sequential = Sequential;

}(typeof exports === 'undefined' ? window : exports));
