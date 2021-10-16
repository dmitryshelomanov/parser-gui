import { flattenTree } from "@gui/lib/gui";

export function createMock() {
  if (process.env.NODE_ENV === "production") {
    return flattenTree.create({
      name: {
        xpath: "/html/body/div[1]/div[1]/div/h1",
        name: "name",
        children: [],
      },
      currentPosition: {
        xpath: "/html/body/div[1]/div[1]/div/p",
        name: "currentPosition",
        children: [],
      },
      expirience: {
        xpath: "/html/body/div[1]/div[2]/div[1]/div",
        name: "expirience",
        children: ["company", "position"],
      },
      company: {
        xpath: "/h3",
        name: "company",
        children: [],
        parentId: "expirience",
      },
      position: {
        xpath: "/p[1]",
        name: "position",
        children: [],
        parentId: "expirience",
      },
    });
  }

  return flattenTree.create();
}
