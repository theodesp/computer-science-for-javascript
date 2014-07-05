/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**
* Computes the polynomial with coefficients coeff[0..n] for x using Horners method.
* @module Algorithms
* @submodule Mathematical  
* @param {Array} coeff A coefficients array
* @param {Number} x the point to evaluate
* @return {Number} The evaluated number at the point x
*
* @example
*     Horner([2, 6, 2, -1],3);; ==> 113
*/

function Horner(coeff, x) 
{
    // Initialize result
    var result = coeff[0], len = coeff ? coeff.length : 0;

    // Evaluate value of polynomial using Horner's method
    // ex. 2x^3 + 4x^2 - 6x +5 becomes ((2x +4)x -6)x +5
    for (var i = 1; i < len; i += 1)
        result = result * x + coeff[i];
    
    return result;
}