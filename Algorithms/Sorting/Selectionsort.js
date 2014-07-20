
(function (exports) {
/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**Sorts the n elements of an unsorted array a[0:n] by finding the minimum element on each pass and
 * putting in at the beginning.In every iteration of selection sort, the minimum element 
 * from the unsorted subarray is picked and moved to the sorted subarray.
* @module Algorithms
* @submodule Sorting    
* @param {Array} array An array to be sorted
* @param {Function} cmp A custom comparison function that compares the values of the items
* @return {Array} The sorted array
* @example
*     Selectionsort([4, 3, 9, 7, 11, 8]); ==> [3, 4, 7, 8, 9, 11]
*/

function _swap(list, a, b) {
    // Swaps a and b
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}

function Selectionsort(array, cmp) {
    cmp = cmp || _cmp;
    var i, j, pos, l = array ? array.length : 0, sorted = false;
    for (i = 0; !sorted && i < l-1; i += 1) {
        pos = i;
        sorted = true;

        //find the smallest element
        for (j = i + 1; j < l; j += 1) {
            if (cmp(array[j] , array[pos]) <= 0) {
                //found! Save position
                pos = j;
            } 
            else {
                //its not sorted
                sorted = false;
            }
        }
        //make the swap
        _swap(array, pos, i);
    }
    return array;
}

function _cmp(a, b) {
    return a - b;
}

exports._swap = _swap;
exports.Selectionsort = Selectionsort;

}(typeof exports === 'undefined' ? window : exports));