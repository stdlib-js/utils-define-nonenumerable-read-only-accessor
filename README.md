<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Non-Enumerable Read-Only Accessor

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Define][@stdlib/utils/define-property] a non-enumerable **read-only** accessor.



<section class="usage">

## Usage

<!-- eslint-disable id-length -->

To use in Observable,

```javascript
setNonEnumerableReadOnlyAccessor = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var setNonEnumerableReadOnlyAccessor = require( 'path/to/vendor/umd/utils-define-nonenumerable-read-only-accessor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.setNonEnumerableReadOnlyAccessor;
})();
</script>
```

#### setNonEnumerableReadOnlyAccessor( obj, prop, getter )

[Defines][@stdlib/utils/define-property] a non-enumerable **read-only** accessor.

<!-- eslint-disable id-length -->

<!-- run throws: true -->

```javascript
function getter() {
    return 'bar';
}

var obj = {};

setNonEnumerableReadOnlyAccessor( obj, 'foo', getter );

obj.foo = 'boop';
// throws <Error>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Non-enumerable read-only accessors are **non-configurable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function Foo( name ) {
    if ( !(this instanceof Foo) ) {
        return new Foo( name );
    }
    setNonEnumerableReadOnlyAccessor( this, 'name', getName );
    return this;

    function getName() {
        return name;
    }
}

var foo = new Foo( 'beep' );

try {
    foo.name = 'boop';
} catch ( err ) {
    console.error( err.message );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-property`][@stdlib/utils/define-nonenumerable-property]</span><span class="delimiter">: </span><span class="description">define a non-enumerable property.</span>
-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-read-only-property`][@stdlib/utils/define-nonenumerable-read-only-property]</span><span class="delimiter">: </span><span class="description">define a non-enumerable read-only property.</span>
-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-read-write-accessor`][@stdlib/utils/define-nonenumerable-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable read-write accessor.</span>
-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-write-only-accessor`][@stdlib/utils/define-nonenumerable-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable write-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils-define-read-only-accessor`][@stdlib/utils/define-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a read-only accessor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-define-nonenumerable-read-only-accessor.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-define-nonenumerable-read-only-accessor

[test-image]: https://github.com/stdlib-js/utils-define-nonenumerable-read-only-accessor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-define-nonenumerable-read-only-accessor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-define-nonenumerable-read-only-accessor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-define-nonenumerable-read-only-accessor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-define-nonenumerable-read-only-accessor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-define-nonenumerable-read-only-accessor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-define-nonenumerable-read-only-accessor/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-define-nonenumerable-read-only-accessor/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-define-nonenumerable-read-only-accessor/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-define-nonenumerable-read-only-accessor/blob/main/branches.md

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils-define-property/tree/umd

<!-- <related-links> -->

[@stdlib/utils/define-nonenumerable-property]: https://github.com/stdlib-js/utils-define-nonenumerable-property/tree/umd

[@stdlib/utils/define-nonenumerable-read-only-property]: https://github.com/stdlib-js/utils-define-nonenumerable-read-only-property/tree/umd

[@stdlib/utils/define-nonenumerable-read-write-accessor]: https://github.com/stdlib-js/utils-define-nonenumerable-read-write-accessor/tree/umd

[@stdlib/utils/define-nonenumerable-write-only-accessor]: https://github.com/stdlib-js/utils-define-nonenumerable-write-only-accessor/tree/umd

[@stdlib/utils/define-read-only-accessor]: https://github.com/stdlib-js/utils-define-read-only-accessor/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
