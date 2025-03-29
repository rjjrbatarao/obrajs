# RawJS
Raw Javascript Framwork like in < 50 lines 1.3kb library. Build website the native way. Its almost ReactJS-like! ReactJS uses {} RawJS uses the native ${} for templating without any bundling or additional library with same functionality. 
## Image
![image](https://github.com/user-attachments/assets/4f8cf9a2-9c31-45d8-aa2e-2cecbaed2da5)
![image](https://github.com/user-attachments/assets/5ffc9a8a-fe87-4281-bf27-f1a78086e8c0)


## Introduction
RawJS was created as my journey of building the smallest Javascript framework + template engine possible. Bundleless componetized templates makes your web development quicker and easy to maintain.

## Why rawjs
Many js frameworks are built with bundlers and packages and rawjs just eliminate the need of it thus raw speed of web application development can be achieved with single page web applications. Build html/js website the native way, a bundler is an overkill for SPA's.

## How does rawjs work
Just created a wrapper of the javascript's built in string templating `${}` and expose a prettier compatible template static files. It uses 2 usable functions raw_load_html and the raw_load_string. The template here can be made with different file extension naming i just use default .html to make prettier happy but it can be any seriously. ${_name} the _name here can be functions global variables or from the template raw_load_html/raw_load_string obj argument. The obj accepts any json key naming. For now only functions, string, integer, boolean are supported, for array and object the test2.html template provides example how to handle this kind of data type. Extend raw.js functionalities as you like :)

## Rawjs 3 main functions
```js
raw_tpl = (template, vars = {})
raw_load_html = (id, dir, obj, async = false)
raw_load_string = (dir, obj, async = false)
```

## file structure
```
./template/    -> folder where your components lives
./raw.js       -> the raw library
./index.html   -> main html
./app.js       -> your custom business logic
```
## Usage
copy the raw.js here or use this < 50 lines code on your own .js, create your static template folder where you want to build your components.
```js
const raw_tpl = (template, vars = {}) => {
  const raw_function = "raw_" + Date.now(); // randomized function name
  const handler = new Function(
    "vars",
    [
      "const " +
        raw_function +
        " = ( " +
        Object.keys(vars).join(", ") +
        " ) =>",
      "`" + template + "`",
      "return " +
        raw_function +
        "(...Object.keys(vars).map(function(e){" +
        "return typeof vars[e] === 'function' ?  vars[e].call() : vars[e];" +
        "}))",
    ].join("\n")
  );
  return handler(vars);
};

const raw_load_html = (id, dir, obj, async = false) => {
  const request = new XMLHttpRequest();
  request.open("GET", dir, async); // `false` makes the request synchronous
  request.send(null);
  if (request.status === 200) {
    document.getElementById(id).innerHTML = raw_tpl(request.responseText, obj);
    return request.responseText;
  }
  return null;
};

const raw_load_string = (dir, obj, async = false) => {
  const request = new XMLHttpRequest();
  request.open("GET", dir, async); // `false` makes the request synchronous
  request.send(null);
  if (request.status === 200) {
    return raw_tpl(request.responseText, obj);
  }
  return null;
};
```
## See the project example

## Source
https://stackoverflow.com/questions/30003353/can-es6-template-literals-be-substituted-at-runtime-or-reused

## License
MIT
