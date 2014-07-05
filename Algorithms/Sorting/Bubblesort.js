/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**Sorts the n elements of array a[0:n] by bubbling the elements on each pass.
*That is comparing the 2 adjacent elements and swaps them if a[i] > a[i+1].
* @module Algorithms
* @submodule Sorting   
* @param {Array} array An array to be Sorted
* @return {Array} The sorted array
* @example
*     Bubblesort([4, 3, 9, 7, 11, 8]); ==> [3, 4, 7, 8, 9, 11]
*/

function _swap(list, a, b) {
    // Swaps a and b
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}


function Bubblesort(array) {
    var i, j, l = array ? array.length : 0;
    isSwapped = false;
    for (i = 1; i < l; i += 1) 
    {
        //first no swaps
        isSwapped = false;
        for (j = 0; j < l - 1; j += 1) 
        { //check adjacent elements
            if (array[j] > array[j + 1]) 
            {
                _swap(array, j, j + 1);
                isSwapped = true;
            }
        }

        // IF no two elements were swapped by inner loop, then break
        if (isSwapped === false)
            break;
    }
    return array;
}
