# RawJs
An ultra lightweight(2kb) reactive and fast template engine using built in javascript template literal engine.

## About
RawJS build websites with reusable template files from any file extension without additional library, compiling and bundling. This leverages javascripts built on template literal engine to process template string and native javascript dom for reactivity.

## Uses
Quick simple and fast SPA's
Embedded dashboard for microcontrollers
Organizing your web layout with reusable templates

## Demo
Still fixing my github page.
https://rjjrbatarao.github.io/rawjs/examples/browser/

## Example
```javascript
const rjs = new RawJS();

/**
 * load template test.html into app id
 */
rjs.rHtml("app", "/examples/browser/templates/test.tpl", {
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
/**
 * load test.html template into component1 from first rawloadHtml
 */
rjs.rHtml("component1", "/examples/browser/templates/test.tpl", {
  title: "Minimal Raw Component",
  test: "this is the data",
  subid: "component2",
  name: () => {
    return "john doe 2";
  },
  func: () => {
    return 3 * 2;
  }, // use arithmetic
  disabled: () => {
    return 0 ? "disabled" : "";
  },
});

let count = 0;
let users = ["hello user1", "hello user2", "hello user3", "hello user4"];
/**
 *
 * @returns template rendered from users array
 * count is global variable
 */
const hello = () => {
  console.log(users.length);
  let user_map = "";
  users.map((user) => {
    user_map += rjs.rString("/examples/browser/templates/testrow.tpl", {
      name: user,
    });
  });
  return user_map;
};

/**
 * load test2.html template into component3
 */
rjs.rHtml("component3", "/examples/browser/templates/test2.tpl", {
  title: "Minimal Raw test2.html",
  test: "this is the data new",
  name: () => {
    return "john doe 3";
  },
});

/**
 * load testcount.html template into component3
 */
rjs.rHtml("component4", "/examples/browser/templates/testcount.tpl", {
  title: "Minimal button update test",
  id: "count_1",
  count: 1, //initialize to variable
  increment: (event) => {
    event.currentTarget.innerHTML = `clicked`;
    document.getElementById(`count_1`).value = 2;
    console.log(`inc`, event.currentTarget.innerHTML);
  },
  decrement: (event) => {
    event.currentTarget.innerHTML = `clicked`;
    document.getElementById(`count_1`).value = 1;
    console.log(`dec`, event.currentTarget.innerHTML);
  },
});

```

## Methods and Getters
* rTemplate
* rString
* rHtml

## New
* binding functions to native events

## Related projects
```
https://github.com/moappi/json2html
```

## License
MIT License

Copyright (c) 2022 collagejs

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
