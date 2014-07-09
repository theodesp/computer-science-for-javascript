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

    //destructor called explicitely
    Destroy: function() {
        this._arr = [];
        this._length = 0;
    },

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
     * @return {variant} The n'th element if exists or false otherwise
     * @method Find
     */
    Find: function(n) {
        //check bounds
        if (n < 1 || n > this._length) {
            return false;
        }
        // it exists so return it
        return this._arr[n - 1];
    },
    /**
     * Try to locate the i position of element  if found
     * @param {Object} elem The element to search 
     * @return {int} The position of that element or 0 
     * @method Find
     */
    Search: function(elem) {
        var i, l = this._length;
        for (i = 0; i < l; i += 1) {
            if (elem === this._arr[i]) {
                return ++i;
            }
        }
        // not found
        return 0;
    },

    /**
     * Delete the element elem on the n'th position and set it to elem
     * @param {Object} elem The element that was deleted
     * @param {int} n The position of the deleted element
     * @return {ArrayList} The modified ArrayList
     * @method Delete
     */
    Delete: function(elem, n) {
        
        var i, n = n || 1;
        //check bounds
        if (n < 1 || n > this._length) {
            return this;
        }

        //check if empty
        if (this.IsEmpty()) {
            return this;
        }
        
        elem = this.Find(n);
        if (elem) {
            //shift elements on the left of n
            for (i = n; i < this._length; i += 1) {
                this._arr[i - 1] = this._arr[i];
            }
        }
        this._length -= 1;
        return this;
    },
    /**
     * Insert the element elem after the n'th position
     * @param {Object} elem The element to be inserted
     * @param {int} n The position
     * @return {ArrayList} The modified ArrayList
     * @method Insert
     */
    Insert: function(elem, n) {
        
        var i, n = n || 0;
        //check bounds
        if (n < 0 || n > this._length) {
            return this;
        }
        //check if array is full
        if (this._length > this._maxsize) {
            return this;
        }
        
        for (i = this._length - 1; i >= n; i -= 1) {
            //shift elements on the right of n
            this._arr[i + 1] = this._arr[i];
        }
        this._arr[n] = elem;
        this._length += 1;
        return this;
    },
    /**
     * Returns the String representation of the ArrayList
     * @return {String} A string representation of the ArrayList.
     * @method toString
     */
    toString: function() {
        var i, l = this._length,result="";
        for (i = 0; i < l; i += 1) {
            result+=this._arr[i].toString();
        }
        return result;
    },
//Alternate,

    /**
     * Splits the LinearList into 2 LinearLists A and B that each of them will contain
     * the even and the odd elements respectively
     * @param {LinearList} A The first LinearList to be populated
     * @param {LinearList} B The second LinearList to be populated
     * @return {Boolean} True if successful
     * @method Split
     */
    Split: function(A, B) {

        //make sure the lengths are correct A.length + B.length = this._length
        var len1 = Math.ceil(this._length / 2);
        var len2 = this._length - len1;
        
        //make sure A and B are LinearLists
        var B = B || new LinearList(len2);
        var A = A || new LinearList(len1);
        
        if (A.Length() > A._maxsize || B.Length() > B._maxsize) {
            //not enough space for result
            return false;
        }

        //now we store the ith in A and ith+1 in B while either runs out of space
        var i = 0, j = 0; // index for current array and A,B arrays
        while (i <= B._maxsize) {
            A._arr[j] = this._arr[i++];
            B._arr[j++] = this._arr[i++];
        }

        // is an element left?
        if (A._maxsize > B._maxsize) {
            A._arr[j] = this._arr[i];
        }
        return true;
    }
//Reverse,
//Merge
};

