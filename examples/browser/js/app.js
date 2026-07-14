const ojs = new ObraJS();

/**
 *
 * Array variables
 * Demo of dynamic variables
 */
let sidebar_array = [
  {
    name: "Dashboard",
    url: "index.html",
    icon: "fa-chart-bar",
    icon_type: "fa-regular",
  },
  {
    name: "Settings",
    url: "settings.html",
    icon: "fa-gear",
    icon_type: "fa-solid",
  },
  {
    name: "Profile",
    url: "profile.html",
    icon: "fa-user",
    icon_type: "fa-regular",
  },
  {
    name: "Projects",
    url: "projects.html",
    icon: "fa-diagram-project",
    icon_type: "fa-solid",
  },
  {
    name: "Courses",
    url: "courses.html",
    icon: "fa-graduation-cap",
    icon_type: "fa-solid",
  },
  {
    name: "Friends",
    url: "friends.html",
    icon: "fa-circle-user",
    icon_type: "fa-regular",
  },
  {
    name: "Files",
    url: "files.html",
    icon: "fa-file",
    icon_type: "fa-regular",
  },
  {
    name: "Plans",
    url: "plans.html",
    icon: "fa-credit-card",
    icon_type: "fa-regular",
  },
];

let widget_half_array = [
  {
    file: "widget_charts.html",
    props: {
      name: "Line Chart",
      chart_id: "chart1_id",
      onload_chart: () => {
        // documentation @ https://gionkunz.github.io/chartist-js/getting-started.html
        new Chartist.Line(
          "#chart1_id",
          {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [[5, 9, 7, 8, 5, 3, 5, 4]],
          },
          {
            low: 0,
            showArea: true,
          },
        );
      },
    },
  },
  {
    file: "widget_charts.html",
    props: {
      name: "Bar Chart",
      chart_id: "chart2_id",
      onload_chart: () => {
        // documentation @ https://gionkunz.github.io/chartist-js/getting-started.html
        new Chartist.Bar("#chart2_id", {
          labels: [1, 2, 3, 4, 5],
          series: [[100, 120, 180, 200, 200]],
        }).on("draw", function (data) {
          if (data.type === "bar") {
            data.element.attr({
              style: "stroke-width: 30px",
            });
          }
        });
      },
    },
  },
  {
    file: "widget_charts.html",
    props: {
      name: "Bar Chart Horizontal",
      chart_id: "chart3_id",
      onload_chart: () => {
        // documentation @ https://gionkunz.github.io/chartist-js/getting-started.html
        new Chartist.Bar(
          "#chart3_id",
          {
            labels: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            series: [
              [5, 4, 3, 7, 5, 10, 3],
              [3, 2, 9, 5, 4, 6, 4],
            ],
          },
          {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            axisY: {
              offset: 70,
            },
          },
        );
      },
    },
  },
  {
    file: "widget_charts.html",
    props: {
      name: "Pie Chart",
      chart_id: "chart4_id",
      onload_chart: () => {
        // documentation @ https://gionkunz.github.io/chartist-js/getting-started.html
        var data = {
          series: [5, 3, 4],
        };

        var sum = function (a, b) {
          return a + b;
        };

        new Chartist.Pie("#chart4_id", data, {
          labelInterpolationFnc: function (value) {
            return Math.round((value / data.series.reduce(sum)) * 100) + "%";
          },
        });
      },
    },
  },
  {
    file: "widget_profile.html",
    props: {
      name: "Abdelrahman",
    },
  },
  {
    file: "widget_draft.html",
    props: {
      name: "Quick Draft",
    },
  },
  {
    file: "widget_statistics.html",
    props: {
      name: "Tickets Statistics",
    },
  },
  {
    file: "widget_targets.html",
    props: {
      name: "Yearly Targets",
    },
  },
  {
    file: "widget_news.html",
    props: {
      name: "Latest News",
    },
  },
  {
    file: "widget_task.html",
    props: {
      name: "Latest Tasks",
    },
  },
  {
    file: "widget_items.html",
    props: {
      name: "Top Search Items",
    },
  },
  {
    file: "widget_uploads.html",
    props: {
      name: "Latest Uploads",
    },
  },
  {
    file: "widget_progress.html",
    props: {
      name: "Last Project Progress",
    },
  },
  {
    file: "widget_reminders.html",
    props: {
      name: "Reminders",
    },
  },
  {
    file: "widget_post.html",
    props: {
      name: "Latest Post",
    },
  },
  {
    file: "widget_stats.html",
    props: {
      name: "Social Media Stats",
    },
  },
];

let widget_full_array = [
  {
    file: "widget_projects.html",
    props: {
      name: "Projects",
    },
  },
];

let menu_array = [
  {
    name: "Profile",
    url: "/profile",
    class_name: "",
    icon: "fa-user",
    icon_type: "fa-regular",
  },
  {
    name: "Settings",
    url: "/settings",
    class_name: "",
    icon: "fa-gear",
    icon_type: "fa-solid",
  },
  {
    name: "Logout",
    url: "/logout",
    class_name: "logout",
    icon: "fa-sign-out",
    icon_type: "fa-solid",
  },
];

/**
 *
 * @returns this functions are called directly from templates
 * Demo of functions called from templates
 */

const sidebar = () => ojs.oMap(sidebar_array, "sidebars/sidebar_item.html"); // this is any object format
const menubar = () => ojs.oMap(menu_array, "layouts/menu_item.html");
const widget_half = () => ojs.oMapFile(widget_half_array, "widgets/"); // must be file and props // props can be any object format
const widget_full = () => ojs.oMapFile(widget_full_array, "widgets/");

let signed_in = ojs.oGet("jwt") ? true : false; // must be validated jwt

/**
 * Route functions
 * Demo of functions for routes
 */
const loadLogin = () => {
  ojs.oHtml("login", "signin/signin.html", {
    name: "Abdelrahman",
    username_id: "username_id",
    password_id: "password_id",
    handle_login: (element) => {
      ojs.oSet("jwt", "abcdefg12345", 60 * 60); // 60 is 1 minute expiration, for 1 hour 60*60, for 30 days 60 * 60 * 24 * 30
      console.log(
        "button clicked",
        ojs.oId("username_id").value,
        ojs.oId("password_id").value,
      );
      ojs.oAssign("/");
    },
  });
};
const loadDashboard = () => {
  ojs.oHtml("dashboard", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
  ojs.oHtml("header", "layouts/header.html", {
    menu_id: "menu_id",
    handle_menu: (event) => {
      console.log("clicking menu");
      ojs.oId("menu_id").classList.toggle("show");
    },
  });
  ojs.oHtml("widgets_half", "widgets/widget_half.html", {});
  ojs.oHtml("widgets_full", "widgets/widget_full.html", {});
  ojs.oHtml("spinner", "utilities/spinner.html", {
    message: "Loading Dashboard...",
    onload_spinner: hideLoading(),
  });
};
const loadSettings = () => {
  ojs.oHtml("settings", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
  ojs.oHtml("header", "layouts/header.html", {
    menu_id: "menu_id",
    handle_menu: (event) => {
      console.log("clicking menu");
      ojs.oId("menu_id").classList.toggle("show");
    },
  });
  ojs.oHtml("spinner", "utilities/spinner.html", {
    message: "Loading Settings...",
    onload_spinner: hideLoading(),
  });
};
const loadProfile = () => {
  ojs.oHtml("profile", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
  ojs.oHtml("header", "layouts/header.html", {
    menu_id: "menu_id",
    handle_menu: (event) => {
      console.log("clicking menu");
      ojs.oId("menu_id").classList.toggle("show");
    },
  });
  ojs.oHtml("spinner", "utilities/spinner.html", {
    message: "Loading Profile...",
    onload_spinner: hideLoading(),
  });
};
const loadProjects = () => {
  ojs.oHtml("projects", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
  ojs.oHtml("header", "layouts/header.html", {
    menu_id: "menu_id",
    handle_menu: (event) => {
      console.log("clicking menu");
      ojs.oId("menu_id").classList.toggle("show");
    },
  });
  ojs.oHtml("spinner", "utilities/spinner.html", {
    message: "Loading Projects...",
    onload_spinner: hideLoading(),
  });
};
const loadCourses = () => {
  ojs.oHtml("courses", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
  ojs.oHtml("header", "layouts/header.html", {
    menu_id: "menu_id",
    handle_menu: (event) => {
      console.log("clicking menu");
      ojs.oId("menu_id").classList.toggle("show");
    },
  });
  ojs.oHtml("spinner", "utilities/spinner.html", {
    message: "Loading Courser...",
    onload_spinner: hideLoading(),
  });
};
const loadFriends = () => {
  ojs.oHtml("friends", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
  ojs.oHtml("header", "layouts/header.html", {
    menu_id: "menu_id",
    handle_menu: (event) => {
      console.log("clicking menu");
      ojs.oId("menu_id").classList.toggle("show");
    },
  });
  ojs.oHtml("spinner", "utilities/spinner.html", {
    message: "Loading Friends...",
    onload_spinner: hideLoading(),
  });
};
const loadFiles = () => {
  ojs.oHtml("files", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
  ojs.oHtml("header", "layouts/header.html", {
    menu_id: "menu_id",
    handle_menu: (event) => {
      console.log("clicking menu");
      ojs.oId("menu_id").classList.toggle("show");
    },
  });
  ojs.oHtml("spinner", "utilities/spinner.html", {
    message: "Loading Files...",
    onload_spinner: hideLoading(),
  });
};
const loadPlans = () => {
  ojs.oHtml("plans", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
  ojs.oHtml("header", "layouts/header.html", {
    menu_id: "menu_id",
    handle_menu: (event) => {
      console.log("clicking menu");
      ojs.oId("menu_id").classList.toggle("show");
    },
  });
  ojs.oHtml("spinner", "utilities/spinner.html", {
    message: "Loading Plans...",
    onload_spinner: hideLoading(),
  });
};
const loadLogout = () => {
  ojs.oRemove("jwt");
  ojs.oAssign("/");
};

/**
 * Route definitions
 *
 */
const routes = {
  "/": loadDashboard,
  "/settings": loadSettings,
  "/profile": loadProfile,
  "/projects": loadProjects,
  "/courses": loadCourses,
  "/friends": loadFriends,
  "/files": loadFiles,
  "/plans": loadPlans,
  "/login": loadLogin,
  "/logout": loadLogout,
};

/**
 *
 * @param {*} path
 * @param {*} callback is function executed from routes
 * @returns
 */
const middlewareFunction = (path, routeFunc) => {
  // demo of signin middleware
  console.log("path:", path);
  if (path === "/login") {
    if (signed_in) {
      ojs.oAssign("/");
    }
    routeFunc();
  } else {
    if (signed_in) {
      routeFunc();
    } else {
      ojs.oAssign("/login");
    }
  }

  return signed_in;
};

/**
 *
 * Obra routing
 */
ojs.oRoute(routes, middlewareFunction);

/**
 *
 * Other rfunctions
 */

function showLoading() {
  document.getElementById("spinner").classList.remove("hide");
}

function hideLoading() {
  const loading = document.getElementById("spinner");
  setTimeout(() => {
    loading.classList.add("hide");
    loading.remove();
  }, 200);
}
