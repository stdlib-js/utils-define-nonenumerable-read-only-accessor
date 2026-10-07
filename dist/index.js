/** @license Apache-2.0 */

'use strict';

/**
* Define a non-enumerable read-only accessor.
*
* @module @stdlib/utils-define-nonenumerable-read-only-accessor
*
* @example
* var setNonEnumerableReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
*
* function getter() {
*     return 'bar';
* }
*
* var obj = {};
*
* setNonEnumerableReadOnlyAccessor( obj, 'foo', getter );
*
* try {
*     obj.foo = 'boop';
* } catch ( err ) {
*     console.error( err.message );
* }
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
