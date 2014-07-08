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
* @return {int} The position found or -1 otherwise
*
* @example
*   BinarySearch([23, 5, 8, 99, 0, -3], -3); ==> 
*       
*/

function BinarySearch(array, item) {
    //store left, right, and middle points
    var l = array.length, left = 0, right = l - 1, middle;
    
    while (left <= right) {
        // find the middle point and check if the item is smaller or larger
        middle = (left + right) / 2;
        if (item === array[middle]) {
            return middle;
        } 
        else if (item < array[middle]) {
            //search lower half part
            right = middle - 1;
        } 
        else {
            //search upper half part
            left = middle + 1;
        }
    }
    //not found
    return -1
}