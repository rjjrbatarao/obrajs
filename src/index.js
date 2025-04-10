/*
    sources:
    https://stackoverflow.com/questions/30003353/can-es6-template-literals-be-substituted-at-runtime-or-reused
    https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream/DecompressionStream
    https://gist.github.com/igrigorik/5736866
    https://davidwalsh.name/javascript-arguments
*/
class RawJS {
  constructor() {}
  /**
   *
   * @param {*} template
   * @param {*} vars
   * @returns
   */

  rawTemplate(template, vars = {}) {
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
          "console.log(typeof vars[e] === 'function' ? vars[e].length : 0);" +
          "return typeof vars[e] === 'function' ?  vars[e].call() : vars[e];" +
          "}))",
      ].join("\n")
    );
    return handler(vars);
  }
  /**
   *
   * @param {*} blob
   * @returns
   */
  gzipToString(blob) {
    const ds = new DecompressionStream("gzip");
    const decompressedStream = blob.stream().pipeThrough(ds);
    return decompressedStream;
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
  rawLoadHtml(id, dir, obj, async = false, compressed = false) {
    const request = new XMLHttpRequest();
    request.open("GET", dir, async); // `false` makes the request synchronous
    request.send(null);
    if (request.status === 200) {
      if (compressed === true) {
        document.getElementById(id).innerHTML = this.rawTemplate(
          this.gzipToString(request.response),
          obj
        );
      } else {
        document.getElementById(id).innerHTML = this.rawTemplate(
          request.responseText,
          obj
        );
      }

      return request.responseText;
    }
    return null;
  }
  /**
   *
   * @param {*} dir
   * @param {*} obj
   * @param {*} async
   * @param {*} compressed
   * @returns
   */
  rawLoadString(dir, obj, async = false, compressed = false) {
    const request = new XMLHttpRequest();
    request.open("GET", dir, async); // `false` makes the request synchronous
    request.send(null);
    if (request.status === 200) {
      if (compressed === true) {
        return this.rawTemplate(this.gzipToString(request.response), obj);
      } else {
        return this.rawTemplate(request.responseText, obj);
      }
    }
    return null;
  }
}

module.exports = RawJS;
