/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**
 *A linear list implementation
* @module Data Structures
* @submodule Lists
* @class LinearList
* @constructor
* @param {Int } MaxSize The Maximum size of the list
*/

function LinearList(MaxSize) {
    /**
* The maximum size of the array
* @property _maxsize
* @type int
* @private
*/
    this._maxsize = MaxSize || 10;

    /**
* The current occupied length of the array
* @property _length
* @type int
* @private
*/
    this._length = 0;
    
 /**
* The private dynamic array
* @property _arr
* @type array
* @private
*/
    this._arr = [];
    
    if (MaxSize) {
        // make space for elements
        this._arr.length = MaxSize;
    }
}

LinearList.prototype = {

    //constructor
    constructor: LinearList,
    
    /**
     * Checks if ArrayList is empty
     * @return {Boolean}
     * @method IsEmpty
     */
    IsEmpty: function() {
        return this._length === 0;
    },
    
    /**
     * Returns the current length of the ArrayList
     * @return {int}
     * @method Length
     */
    Length: function() {
        return this._length;
    },
    
    /**
     * Return the n'th element of the ArrayList or false otherwise
     * @param {int} n 
     * @return {Object} The n'th element if exists
     * @method Find
     */
    Find: function(n) {
        //check bounds
        if (n < 0 || n > this._length) {
            return false;
        }
        // it exists so return it
        return this._arr[n-1];
    },
    /**
     * Try to locate the i position of element  if found
     * @param {Object} elem The element to search 
     * @return {int} The position of that element or 0 
     * @method Find
     */
    Search: function(elem) {
        var i,l=this._length;
        for(i=0;i<l;i+=1) {
            if (elem === this._arr[i]) {
                return ++i;
            }
        }
        // not found
        return 0;
    }
    //Delete,
    /**
     * Insert the element elem after the n'th position
     * @param {Object} elem The element to be inserted
     * @param {int} n The position
     * @return {ArrayList} The modified ArrayList
     * @method Insert
     */
    //Insert: function(elem,n) {}
    //ToString,
    //Alternate,
    //Split,
    //Reverse,
    //Merge
}