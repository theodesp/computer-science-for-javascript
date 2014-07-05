/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**
* Ranks the n elements of array a[0:n]. The rank of the element at position i
* is the number of smaller elements plus the equal elements that are positioned
* on the left of that element.
* @module Algorithms
* @submodule Searching   
* @param {Array} array An array to be ranked 
* @return {Array} The array of ranks for every element
* @example
*     Rank([4, 3, 9, 3, 11, 9]); ==> [2, 0, 3, 1, 5, 4]
*/

function Rank(array) {

    var i, j, l = array ? array.length : 0;, rank = [];
    rank.length = l;
    
    for (i = 0; i < l; i += 1) {
        //initialize 
        rank[i] = 0;
    }

    //compare all pairs
    for (i = 1; i < l; i += 1) {
        for (j = 0; j < i; j += 1) {
            if (array[j] <= array[i]) {
                rank[i] += 1;
            } 
            else {
                rank[j] += 1;
            }
        }
    }
    return rank;
}

/**
* Sorts the n elements of array a[0:n] using the rank table and a temporary table
* @module Algorithms
* @submodule Searching   
* @param {Array} array An array to be sorted
* @param {Array} rank The rank table that was computed using the Rank function or null
* @return {Array} The sorted array 
* @example
*     var r=Rank([4, 3, 9, 3, 11, 9]); ==> [2, 0, 3, 1, 5, 4]
*     Ranksort([4, 3, 9, 3, 11, 9], r); ==> [3, 3, 4, 9, 9, 11]
*
*     or
*     
*     Ranksort([4, 3, 9, 3, 11, 9]); ==> [3, 3, 4, 9, 9, 11]
*/

function Ranksort(array, rank) {
    var i, l = array.length, sorted = [], r = rank;
    sorted.length = l;
    
    if (r === undefined) {
        // call Rank explicitly
        r = Rank(array);
    }
    
    for (i = 0; i < l; i += 1) {
        // move to correct place in temp 
        sorted[r[i]] = array[i];
    }
    
    return sorted;
}

