# rawjs
Raw Javascript Framework in < 50 lines 1.3kb library. Build website the native way. Its almost ReactJS-like! ReactJS uses {} RawJS uses the native ${} for templating without any bundling or additional library with same functionality. 
## Image
![image](https://github.com/user-attachments/assets/4f8cf9a2-9c31-45d8-aa2e-2cecbaed2da5)

## Introduction
RawJS was created as my journey of building the smallest Javascript framework + template engine possible. Bundleless componetized templates makes your web project more fast and easy to maintain.

## Why rawjs
Many frameworks are built with a pack of bundlers, packes and rawjs just eliminate the need of it thus raw speed of web application development can be achieved with single page web applications.

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

## See the project example

## Source
https://stackoverflow.com/questions/30003353/can-es6-template-literals-be-substituted-at-runtime-or-reused

## License
MIT
