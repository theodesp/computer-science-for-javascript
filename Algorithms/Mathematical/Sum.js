/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**
* Computes the sum of numbers in array a[0:n-1]
* 
* @module Algorithms
* @submodule Mathematical
* @class Sum
* @param {Array} a An array
* @return {Number} The sum of numbers in array a
*
* @example
*   Sum([1,66,-9,57,34]); ==>149
*
*   Sum([1,2,3,4,5,6,7,8,9]); ==>45
*   
* 
*/

function Sum(array) {
    // Computes array[0] + array[1] + ... + array[n-1]
    var tsum = 0;
    for(var i = 0, l = array.length;i <l ;i+=1) {
        tsum += array[i];
    }
    return tsum;
}
