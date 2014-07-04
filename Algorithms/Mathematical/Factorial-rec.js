/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**
* Computes the factorial number of n using recursion.
* 
* @module Algorithms
* @submodule Mathematical
* @param {Number} n A positive number
* @return {Number} Factorial n!
*
* @example
*   Factorial(3);
*   ==>6
*   Factorial(7);
*   ==>5040
* 
*/
function Factorial-rec(n) {
    //Compute n!
    if (n <= 1) {
        return 1;
    }
    else {
        return n * Factorial-rec(n - 1);
    }
}