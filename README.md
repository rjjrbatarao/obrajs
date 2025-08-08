# ObraJS
An ultra lightweight(2kb) reactive componetized lazyloaded json template engine using built in javascript template literal, works in the browser out of the box without building or compiling, just serve the teplate files as static assets.

## About
ObraJS build websites with reusable template files from any file extension without additional library, compiling and bundling. This leverages javascripts built-in template literal engine to process template string and native javascript dom for reactivity.
Bringing back raw dom manipulation for learning javascript.

## Uses
Quick simple and fast SPA's
Embedded dashboard for microcontrollers
Organizing your web layout with reusable templates

## Demo
https://rjjrbatarao.github.io/obrajs/examples/browser/

## Links
https://www.npmjs.com/package/@rjjrbatarao/obrajs

## index.html
`you can add style its up to you`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My ObraJS Webpage</title>
  </head>

  <body>
    <h1>Hello World!</h1>
    <div id="app">test</div>
  </body>
  <script src="./obrajs.js"></script>
  <script src="./app.js"></script>
</html>

```

## Basic Example
### javascript (app.js)
```javascript 
const ojs = new ObraJS();

/**
 * load template test.html into app id
 * the json keys naming is upto you it can be any valid json key.
 * using function with no arguments as value
 * will execute everything inside and returns
 * the result. 
 */
ojs.oHtml("app", "/test.html", {
  title: "Minimal Raw Component",
  test: "this is the data",
  subid: "component1",
  name: () => {
    return "john doe 1";
  },
  func: () => {
    return 2 * 2;
  }, // use arithmetic
  disabled: () => {
    return 1 ? "disabled" : "";
  },
});

```
### template (test.html)
```html 
<div>
  <p>${title}</p>
  <div>${test}</div>
  <div>${name}</div>
  <div>${func}</div>
  <button ${disabled}>Disabled</button>
  <div id="${subid}"></div>
</div>

```

## Example using global data
### javascript (app.js)
```javascript 
const ojs = new ObraJS();
let users = ["hello user1", "hello user2", "hello user3", "hello user4"];
/**
 *
 * @returns template rendered from users global array
 */
const hello = () => {
  console.log(users.length);
  let user_map = "";
  users.map((user) => {
    user_map += ojs.oString("/testrow.html", {
      name: user,
    });
  });
  return user_map;
};

/**
 * load test2.html template into component3
 */
ojs.oHtml("component3", "/main.html", {
  title: "Minimal Raw test2.html",
  test: "this is the data new",
  name: () => {
    return "john doe 3";
  },
});
```
### template1 (testrow.html)
```html
<div>
  <p>${name}</p>
</div>
```
### template2 (main.html)
```html
<div>
  <p>${title}</p>
  <div>${test}</div>
  <div>${name}</div>
  <div>${hello()}</div>
  <div>
    ${ojs.oString("/testrow.html", { name: "rawhello"
    })}
  </div>
</div>

```
## Example with events
### javascript (app.js)
```javascript 
const ojs = new ObraJS();
/**
 * load testcount.html template into component3
 * Example of a reactive template by adding event as function argument
 * obrajs will treat is as event function.
 */
let count = 1;
ojs.oHtml("component4", "/testcount.html", {
  title: "Minimal button update test",
  id: "count_1",
  count: count, //initialize to variable
  increment: (event) => {
    event.currentTarget.innerHTML = `clicked`;
    document.getElementById(`count_1`).value = count++;
    console.log(`inc`, event.currentTarget.innerHTML);
  },
  decrement: (event) => {
    event.currentTarget.innerHTML = `clicked`;
    document.getElementById(`count_1`).value = count--;
    console.log(`dec`, event.currentTarget.innerHTML);
  },
});
```
### template (testcount.html)
```html
<div>
  <h3>${title}</h3>
  <input id="${id}" value="${count}"></input>
  <button onClick="${increment}">Increment</button>
  <button onClick="${decrement}">Decrement</button>
</div>

```

## Example with styling
### javascript (app.js)
```javascript 
const ojs = new ObraJS();
/**
 * load template test.html into app id
 */
ojs.oHtml("app", "/test.html", {
  title: "Minimal Raw Component",
  styleName: "color: red;",
  className: "color-blue",
  test: "this is the data",
  subid: "component1",
  name: () => {
    return "john doe 1";
  },
  func: () => {
    return 2 * 2;
  }, // use arithmetic
  disabled: () => {
    return 1 ? "disabled" : "";
  },
});
```
### template (test.html)
```html
<div>
  <p style="${styleName}">${title}</p>
  <div class="${className}">${test}</div>
  <div>${name}</div>
  <div>${func}</div>
  <button ${disabled}>Disabled</button>
  <div id="${subid}"></div>
</div>
```

## Methods and Getters
* oTemplate
* oString
* oHtml

## Notes
you need backticks to represent string ie. `clicked` like in the example

## New
* binding functions to native events

## Related projects
```
https://github.com/moappi/json2html
```

## License
MIT License

Copyright (c) 2025 obrajs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


