
(function (exports) {
/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**
 *A (x,y) vector impplementation
* @module Data Structures
* @submodule Arrays and Matrixes
* @class Vector
* @constructor
* @param {Int } x The x parameter
* @param {Int } y The y parameter
*/

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype = {

    //constructor
    constructor: Vector,

    /**
     * Adds 2 Vectors
     * @param {Vector|Number} a Vector or Number object to add 
     * @return {Vector} The result of the addition
     * @method Add
     */
    Add: function(v) {
        if (v.constructor === Vector) {
            return new Vector(this.x + v.x, this.y + v.y);
        } 
        else {
            // v is a number
            return new Vector(this.x + v, this.y + v);
        }
    },
    /**
     * Subtracts 2 Vectors
     * @param {Vector|Number} a Vector or Number object to subtract 
     * @return {Vector} The result of the subtraction
     * @method Subtract
     */
    Subtract: function(v) {
        if (v.constructor === Vector) {
            return new Vector(this.x - v.x, this.y - v.y);
        } 
        else {
            // v is a number
            return new Vector(this.x - v, this.y - v);
        }
    },
    /**
     * Multiplies 2 Vectors
     * @param {Vector|Number} a Vector or Number object to multiply 
     * @return {Vector} The result of the multiplication
     * @method Multiply
     */
    Multiply: function(v) {
        if (v.constructor === Vector) {
            return new Vector(this.x * v.x, this.y * v.y);
        } 
        else {
            // v is a number
            return new Vector(this.x * v, this.y * v);
        }
    },
    /**
     * Divides 2 Vectors
     * @param {Vector|Number} a Vector or Number object to divide 
     * @return {Vector} The result of the division
     * @method Divide
     */
    Divide: function(v) {
        if (v.constructor === Vector) {
            return new Vector(this.x / v.x, this.y / v.y);
        } 
        else {
            // v is a number
            return new Vector(this.x / v, this.y / v);
        }
    },
    /**
     * Calculates the dot product of 2 Vectors
     * @param {Vector|Number} a Vector or Number object  
     * @return {Vector} The result of the dot product
     * @method Dot
     */
    Dot: function(a) {
        var d = this.multiply(a);
        return (d.x + d.y);
    },
    /**
     * Calculates the magnitude distance of 2 Vectors
     * @return {Number} The magnitude distance
     * @method Magnitude
     */
    Magnitude: function() {
        //calculate sqrt(x^2 + y^2)
        var x = this.x;
        var y = this.y;
        return Math.sqrt(x * x + y * y);
    },
    /**
     * Calculates normalization of the Vector object
     * @return {Number} The magnitude distance
     * @method Normalize
     */
    Normalize: function() {
        //calculate (x/norm,y/norm) where norm is the normalized value
        var m = this.magnitude();
        return new Vector(this.x / m, this.y / m);
    }
};

exports.Vector = Vector;

}(typeof exports === 'undefined' ? window : exports));
