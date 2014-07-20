
(function (exports) {

/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**Sorts the n elements of an unsorted array a[0:n] by using the Quicksort algorithm.
* @module Algorithms
* @submodule Sorting
* @param {Array} array An array to be Sorted
* @param {Function} cmp A custom comparison function that compares the values of the items
* @return {Array} The sorted array
* @example
*     Quicksort([4, 3, 9, 7, 11, 8]); ==> [3, 4, 7, 8, 9, 11]
*/

function Quicksort(array, cmp) {
    // Sort a[0:n-1] using quick sort.
    cmp = cmp || _cmp;
    var l = array ? array.length : 0;
    quickSort(array, 0, l-1,cmp);
    return array;
}

var quickSort = function(array, left, right,cmp) {
    // Sort array[left:right] with array[right+1] holding the largest element
    if (left >= right) {
        //invalid input
        return;
    }
    
    var pivot = array[left]; // arbitary selection of pivot point
    var i=left, j = right + 1;
    
    // swap elements >= pivot on left side
   // with elements <= pivot on right side
    while (true) {
        do {// find >= element on left hand side
         i += 1;
         } while (cmp(array[i] , pivot) < 0 );
         
        do {// find <= element on right hand side
         j -= 1;
         } while (cmp(array[j] , pivot) > 0 );
      if (i >= j) break;  // swap pair not found
      _swap(array, i, j); //now swap the elements and continue
      }
    
    // place new pivot
    array[left] = array[j];
    array[j] = pivot; // this selects the same arbitary pivot point method
    
    quickSort(array, left, j-1,cmp); // sort left segment
    quickSort(array, j+1, right,cmp); // sort right segment
}

function _swap(list, a, b) {
    // Swaps a and b
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}

function _cmp(a, b) {
    return a - b;
}

exports.Quicksort = Quicksort;
exports._swap = _swap;

}(typeof exports === 'undefined' ? window : exports));