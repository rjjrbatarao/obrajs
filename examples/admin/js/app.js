const ojs = new ObraJS();

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
/**
 *
 * @returns this functions are called directly from templates
 */

const sidebar = () => ojs.oMap(sidebar_array, "sidebars/sidebar_row.html"); // this is any object format
const widget_half = () => ojs.oMapFile(widget_half_array, "widgets/"); // must be file and props // props can be any object format
const widget_full = () => ojs.oMapFile(widget_full_array, "widgets/");

/**
 * Route functions
 */
const loadDashboard = () => {
  ojs.oHtml("dashboard", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
  ojs.oHtml("widgets_half", "widgets/widget_half.html", {});
  ojs.oHtml("widgets_full", "widgets/widget_full.html", {});
};
const loadSettings = () => {
  ojs.oHtml("settings", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
};
const loadProfile = () => {
  ojs.oHtml("profile", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
};
const loadProjects = () => {
  ojs.oHtml("projects", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
};
const loadCourses = () => {
  ojs.oHtml("courses", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
};
const loadFriends = () => {
  ojs.oHtml("friends", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
};
const loadFiles = () => {
  ojs.oHtml("files", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
};

const loadPlans = () => {
  ojs.oHtml("plans", "sidebars/sidebar.html", {
    name: "Abdelrahman",
  });
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
};

/**
 *
 * Obra routing
 */
ojs.oRoute(routes);
