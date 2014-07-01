/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**
* Generates all permutations of list a[k:n] using backtracking
* 
* @module Algorithms
* @submodule Backtracking
* @class Permutation
* @param {Array} a An array of distinct elements
* @param {Number} k A starting index
* @param {Number} n An ending index
* Prints an array of all possible permutations
*
* @example 
*   Permutation(["a", "b", "c",], 0, 2);
*   ==> ["a", "b", "c"] 
        ["a", "c", "b"] 
        ["b", "a", "c"] 
        ["b", "c", "a"] 
        ["c", "b", "a"] 
        ["c", "a", "b"] 
*   
* 
*/

function _swap(list, a, b) {
    // Swaps a and b
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}

function Permutation(list, k, n) {
    var i;
    if (list && k === n) { // print permutation
        console.log(list);
    } 
    else {
        for (i = k; i <= n; i += 1) 
        {
            _swap(list, k, i);
            Permutation(list, k + 1, n);
            _swap(list, k, i); //backtrack
        }
    }
}

