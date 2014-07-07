/**
*  Computer science for JavaScript
*  Copyright 2014 Theofanis Despoudis
*/

/**
 *A 2 dimensional array implementation
* @module Data Structures
* @submodule Arrays and Matrixes
* @class Array2d
* @constructor
* @param {Number } rows The number of rows
* @param {Number } cols The number of columns
*/


function Array2d(rows, cols) {
    
    var that = this;
    
    var create = function() {

        // create the rows
        var x = [];
        x.length = that._rows;

        // for each row create the columns
        for (var i = 0; i < x.length; i++) {
            x[i] = [];
            x[i].length = that._cols;
        }
        return x;
    };

    /**
* The number of rows in the array.
* @property _rows
* @type int
* @private
*/
    this._rows = rows || 0;

    /**
* The number of columns in the array.
* @property _cols
* @type int
* @private
*/
    this._cols = cols || rows || 0;

    /**
* The stored array.
* @property _arr
* @type Array
* @private
*/
    this._arr = create();


}

Array2d.prototype = {

    //constructor
    constructor: Array2d,

    /**
     * In-place transpose of matrix a[0:rows-1][0:rows-1].
     * @return {Void}
     * @method Transpose
     */
    Transpose: function() {
        var i, j;
        for (i = 0; i < this._rows; i += 1)
            for (j = i + 1; j < this._rows; j += 1)
                _swap(this._arr, i, j);
    
    }

};

function _swap(array2d, a, b) {
    // Swaps a and b in 2d array
    var temp = array2d[a][b];
    array2d[a][b] = array2d[b][a];
    array2d[b][a] = temp;
}

