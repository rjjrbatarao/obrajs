raw_load_html("app", "/templates/test.html", {
  title: "Minimal Jaf Component",
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

raw_load_html("component1", "/templates/test.html", {
  title: "Minimal Jaf Component",
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

const hello = () => {
  let user_map = "";
  users.map((user) => {
    user_map += raw_load_string("/templates/testrow.html", {
      name: user,
    });
  });
  return user_map;
};

raw_load_html("component3", "/templates/test2.html", {
  title: "Minimal Jaf test2.html",
  test: "this is the data new",
  name: () => {
    return "john doe 3";
  },
});
