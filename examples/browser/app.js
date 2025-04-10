const rjs = new RawJS();

/**
 * load template test.html into app id
 */
rjs.rawLoadHtml("app", "/rawjs/examples/browser/templates/test.html", {
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
rjs.rawLoadHtml("component1", "/rawjs/examples/browser/templates/test.html", {
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
let users = ["hello user1", "hello user2", "hello user3"];
/**
 *
 * @returns template rendered from users array
 * count is global variable
 */
const hello = () => {
  let user_map = "";
  users.map((user) => {
    user_map += rjs.rawLoadString(
      "/rawjs/examples/browser/templates/testrow.html",
      {
        name: user,
      }
    );
  });
  return user_map;
};

/**
 * load test2.html template into component3
 */
rjs.rawLoadHtml("component3", "/rawjs/examples/browser/templates/test2.html", {
  title: "Minimal Raw test2.html",
  test: "this is the data new",
  name: () => {
    return "john doe 3";
  },
});

// const increment = () => {
//   document.getElementById("count_1").value = count++;
// };

/**
 * load testcount.html template into component3
 */
rjs.rawLoadHtml(
  "component4",
  "/rawjs/examples/browser/templates/testcount.html",
  {
    title: "Minimal button update test",
    count: count, //initialize to variable
    increment: (count, b) => {
      console.log(count, b);
    },
  }
);
