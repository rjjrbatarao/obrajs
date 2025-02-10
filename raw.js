/*
    sources:
    https://stackoverflow.com/questions/30003353/can-es6-template-literals-be-substituted-at-runtime-or-reused
*/
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
