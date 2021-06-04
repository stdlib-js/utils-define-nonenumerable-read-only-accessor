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

> [Define][@stdlib/utils/define-property] a non-enumerable **read-only** accessor.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-define-nonenumerable-read-only-accessor
```

</section>

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var setNonEnumerableReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
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

```javascript
var setNonEnumerableReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );

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
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-define-nonenumerable-read-only-accessor/main/LICENSE

[@stdlib/utils/define-property]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
