/*
    sources:
    https://stackoverflow.com/questions/30003353/can-es6-template-literals-be-substituted-at-runtime-or-reused
    https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream/DecompressionStream
    https://gist.github.com/igrigorik/5736866
    https://davidwalsh.name/javascript-arguments
*/
class ObraJS {
  constructor() {}
  /**
   *
   * @param {*} template
   * @param {*} vars
   * @returns
   */

  oTemplate(template, vars = {}) {
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
          "return typeof vars[e] === 'function' ? vars[e].length > 0 ? " +
          "'('+" +
          "vars[e].toString().replace(/\\\"/g,\"\'\")"  +
          "+')(event)'" +
          ": vars[e].call() : vars[e];" +
          "}))",
      ].join("\n")
    );
    return handler(vars);
  }

  async oHtmlGzip(id, dir, obj){
     const response = await fetch(dir);
     const ds = new DecompressionStream('gzip');
     const decompressed_stream = response.body.pipeThrough(ds);
     const responseString = await new Response(decompressed_stream).text();

     document.getElementById(id).innerHTML = this.oTemplate(
       responseString,
       obj
     );
  }

  /**
   *
   * @param {*} id
   * @param {*} dir
   * @param {*} obj
   * @param {*} async
   * @param {*} compressed
   * @returns
   */
  oHtml(id, dir, obj, async = false) {
        const request = new XMLHttpRequest();
        request.open("GET", dir, async); // `false` makes the request synchronous
        request.send(null);
        if (request.status === 200) {
          document.getElementById(id).innerHTML = this.oTemplate(
            request.responseText,
            obj
          );
          return request.responseText;
        } else {
	  return null;
	}
      
  }
  /**
   *
   * @param {*} dir
   * @param {*} obj
   * @param {*} dir
   * @returns
   */
  oMap(arry, dir){
    let route_map = "";
     arry.map((item) => {
       route_map += this.oString(dir, {...item});
     });
     return route_map;	
  }
  /**
   *
   * @param {*} dir
   * @param {*} obj
   * @param {*} dir
   * @returns
   */
  oMapFile(arry, dir = ""){
    let route_map = "";
     arry.map(({file, props}) => {
       route_map += this.oString(dir + file, {...props});
     });
     return route_map;	
  }

  oId(id){
    return document.getElementById(id);
  }

  /**
   *
   * @param {*} routes
   * @returns
   */
  oRoute(routes, middlewareFunc){
   function handleRoute() {
      const path = window.location.pathname;
      const triggerFunction = routes[path];
      if (triggerFunction) {
          middlewareFunc(path, triggerFunction);
      } else {
    	console.log("404: Page not found");
	return;
      }
   }
   window.addEventListener("popstate", handleRoute);
   window.addEventListener("DOMContentLoaded", handleRoute);	
  }
  /**
   *
   * @param {*} dir
   * @param {*} obj
   * @param {*} async
   * @param {*} compressed
   * @returns
   */
  oString(dir, obj, async = false, compressed = false) {
    const request = new XMLHttpRequest();
    request.open("GET", dir, async); // `false` makes the request synchronous
    request.send(null);
    if (request.status === 200) {
      if (compressed === true) {
        return this.oTemplate(this.gzipToString(request.response), obj);
      } else {
        return this.oTemplate(request.responseText, obj);
      }
    }
    return null;
  }
}

module.exports = ObraJS;
