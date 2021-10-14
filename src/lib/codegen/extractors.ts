import { getElementFromXPath } from "../xpath";
import { LIBS, PAGE } from "./constants";
import { evulate, attachLibs, wrapp, returnS } from "./tokens";

export function textExtractor(el: HTMLElement) {
  return el.textContent;
}

export function classList(el: HTMLElement) {
  return [...el.classList];
}

function xPath() {
  const code = `
    const path = /path/
    const mapper = /mapper/
    const { getElementFromXPath } = window.${LIBS}

    return mapper(getElementFromXPath(
      path,
      document
    ))
  `;

  return code;
}

export function createExtractorsLib() {
  const code = [
    wrapp({
      body: [
        evulate({
          body: [
            attachLibs("textExtractor", textExtractor.toString()),
            attachLibs("classList", classList.toString()),
            attachLibs("getElementFromXPath", getElementFromXPath.toString()),
          ],
        }),
      ],
      name: "registerExtractorsLib",
      args: [PAGE],
    }),

    wrapp({
      body: [
        evulate({
          body: [xPath()],
        }),
      ],
      name: "getElementFromXPath",
      args: [PAGE],
    }),
  ];

  return code.join("; ");
}

export function createParser() {
  const libs = createExtractorsLib();
  const parser = wrapp({
    body: [
      libs,
      returnS({
        type: "object",
        fields: ["registerExtractorsLib", "getElementFromXPath"],
      }),
    ],
    name: "createPraser",
    args: [PAGE],
  });

  return parser;
}
