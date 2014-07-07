/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/** Locates the minimum and the maximum elements in array a[0:n-1].
* @module Algorithms
* @submodule Mathematical   
* @param {Array} array An array to be searched
* @return {Object} returns the pair {min,max}.
* @example
*     MinMax([34,7,99,20,78]) ==> {min:7,max:99}
*/

function MinMax(array) {
    var i, l = array ? array.length : 0;
    //initial guess
    var result = {min: array[0],max: array[0]};
    
    for (i = 1; i < l; i += 1) {
        //compare each element with current min max
        if (result.min > array[i]) {
            result.min = array[i];
        } 
        else if (result.max < array[i]) {
            result.max = array[i];
        }
    }
    return result;
}
