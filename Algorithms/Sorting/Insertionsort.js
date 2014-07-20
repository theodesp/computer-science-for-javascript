
(function (exports) {
/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**Sorts the n elements of array a[0:n] by repeatedly picking the next element and
 *placing it into the right position on the a sorted array.
* @module Algorithms
* @submodule Sorting   
* @param {Array} array An array to be sorted
* @param {Function} cmp A custom comparison function that compares the values of the items
* @return {Array} The sorted array
* @example
*     Insertionsort([4, 3, 9, 7, 11, 8]); ==> [3, 4, 7, 8, 9, 11]
*/

function Insertionsort(array, cmp) {
    cmp = cmp || _cmp;
    var i, j, l = array ? array.length : 0;
    
    for (i = 1; i < l; i += 1) { //pick the next element every time the loop starts
        var elem = array[i];
        for (j = i - 1; j >= 0 && cmp(elem , array[j]) < 0; j -= 1) {
            array[j + 1] = array[j];
        }
        array[j + 1] = elem;
    }
    return array;
}

function _cmp(a, b) {
    return a - b;
}

exports.Insertionsort = Insertionsort;

}(typeof exports === 'undefined' ? window : exports));