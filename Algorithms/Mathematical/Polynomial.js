/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**
* Computes the polynomial with coefficients coeff[0..n] for x.
* @module Algorithms
* @submodule Mathematical  
* @param {Array} coeff A coefficients array
* @param {Number} x the point to evaluate
* @return {Number} The evaluated number at the point x
*
* @example
*     Polynomial([1,5,2],6); ==> 103
*/

function Polynomial(coeff, x) {
        var value = 1, len = coeff ? coeff.length : 0, result = coeff[0];
        for (var i = 1; i < len; i += 1) {
            
            // add the next term value
            // x, x^2, x^3 etc.
            value *= x;

            // compute x^n*coeff + previus sum
            result += value * coeff[i];
        }
        return result;
}