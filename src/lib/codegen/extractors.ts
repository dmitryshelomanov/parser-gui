import { LIBS, PAGE } from "./constants";
import { evulate, attachLibs, wrapp, returnS } from "./tokens";
import { defaultLibs } from "./libs";

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
            attachLibs("textExtractor", defaultLibs.textExtractor),
            attachLibs("classList", defaultLibs.classList),
            attachLibs("getElementFromXPath", defaultLibs.getElementFromXPath),
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
