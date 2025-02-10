# rawjs
Raw Javascript Framework in < 50 lines 1.3kb library. Its almost ReactJS-like! ReactJS uses {} RawJS uses the native ${} for templating without any bundling. 
## Image
![image](https://github.com/user-attachments/assets/4f8cf9a2-9c31-45d8-aa2e-2cecbaed2da5)

## Introduction
RawJS was created as my journey of building the smallest Javascript framework + template engine possible. Bundleless Componetized templates make your project more fast and easy to maintain.

## Why rawjs
Many frameworks are built with a pack of bundlers and rawjs just eliminate the need of it thus raw speed of application and development can be achieved with single page web applications.

## How does rawjs work
Just created a wrapper of the javascript's built in string templating `${}` and expose a prettier compatible template static files.

## Rawjs 3 main functions
```js
raw_tpl = (template, vars = {})
raw_load_html = (id, dir, obj, async = false)
raw_load_string = (dir, obj, async = false)
```

## See the project example


## Source
https://stackoverflow.com/questions/30003353/can-es6-template-literals-be-substituted-at-runtime-or-reused
