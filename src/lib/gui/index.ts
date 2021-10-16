export * from "./tree";
export * from "./types";
export * from "./flatten-tree";

var tree = {
  champ: {
    xpath:
      "/html/body/app-root/main/div/app-events-line/div[2]/div[2]/div[1]/div[1]/div[2]/h2/a",
    name: "champ",
    children: [],
  },
  main: {
    xpath:
      "/html/body/app-root/main/div/app-events-line/div[2]/div[2]/div[1]/app-line-event-unit/div",
    name: "main",
    children: ["time", "teams", "mainCoefs"],
  },
  time: {
    xpath: "/span[1]/span[1]",
    name: "time",
    children: [],
    parentId: "main",
  },
  teams: {
    xpath: "/a[1]/span[1]/b",
    name: "teams",
    children: [],
    parentId: "main",
  },
  mainCoefs: {
    xpath: " //app-line-main-dops-container/div[button and span]/*",
    name: "mainCoefs",
    children: [],
    parentId: "main",
  },
  mainCoefTitles: {
    xpath:
      "/html/body/app-root/main/div/app-events-line/div[2]/div[1]/*[position()>1]",
    name: "mainCoefTitles",
    children: [],
  },
};
