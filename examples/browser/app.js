const ojs = new ObraJS();

/**
 * load template test.html into app id
 */
ojs.oHtml("app", "https://rjjrbatarao.github.io/obrajs/examples/browser/templates/test.html", {
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
/**
 * load test.html template into component1 from first rawloadHtml
 * this demonstrates template reuse
 */
ojs.oHtml("component1", "https://rjjrbatarao.github.io/obrajs/examples/browser/templates/test.html", {
  title: "Minimal Raw Component",
  styleName: "color: red;",
  className: "color-blue",
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
    user_map += ojs.oString("https://rjjrbatarao.github.io/obrajs/examples/browser/templates/testrow.html", {
      name: user,
    });
  });
  return user_map;
};

/**
 * load test2.html template into component3
 */
ojs.oHtml("component3", "https://rjjrbatarao.github.io/obrajs/examples/browser/templates/test2.html", {
  title: "Minimal Raw test2.html",
  test: "this is the data new",
  name: () => {
    return "john doe 3";
  },
});

/**
 * load testcount.html template into component3
 */
ojs.oHtml("component4", "https://rjjrbatarao.github.io/obrajs/examples/browser/templates/testcount.html", {
  title: "Minimal button update test",
  id: "count_1",
  count: 0, //initialize to variable
  increment: (event) => {
    event.currentTarget.innerHTML = "clicked";
    count++;
    document.getElementById("count_1").value = count;
    console.log("inc", count);
  },
  decrement: (event) => {
    event.currentTarget.innerHTML = "clicked";
    count--;
    document.getElementById("count_1").value = count;
    console.log("dec", count);
  },
});

/**
 * load testgzip.html template into component5
 */
ojs.oHtml("component5", "https://rjjrbatarao.github.io/obrajs/examples/browser/templates/testgzip.gz", {
  title: "Minimal Raw testgzip.html",
  test: "this is the data new",
  name: () => {
    return "john doe 5";
  },
});

