
(function (exports) {
/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**
* Searches using binary search on the sorted array a for x.
* Returns the position if found or -1 otherwise.
* @module Algorithms
* @submodule Searching 
* @param {Array} list An unordered list
* @param {Number} item The element to search for
* @param {Function} cmp A custom comparison function that compares the values of the items
* @return {int} The position found or -1 otherwise
*
* @example
*   BinarySearch([23, 5, 8, 99, 0, -3], -3); ==> 
*       
*/

function BinarySearch(array, item, cmp) {
    cmp = cmp || _cmp;
    //store left, right, and middle points
    var l = array.length, left = 0, right = l - 1, middle;
    
    while (left <= right) {
        // find the middle point and check if the item is smaller or larger
        middle = Math.floor((left + right) / 2);
        if (cmp(item , array[middle]) == 0 ) {
            return middle;
        } 
        else if (cmp(item , array[middle]) < 0 ) {
            //search lower half part
            right = middle - 1;
        } 
        else {
            //search upper half part
            left = middle + 1;
        }
    }
    //not found
    return -1;
}

function _cmp(a, b) {
    return a - b;
}

exports.BinarySearch = BinarySearch;

}(typeof exports === 'undefined' ? window : exports));