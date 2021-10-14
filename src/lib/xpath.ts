export function getElementFromXPath(path: string, root?: Document) {
  const targert = root ?? document;
  const result: HTMLElement[] = [];
  const nodesSnapshot = document.evaluate(
    path,
    targert,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
    const node = nodesSnapshot.snapshotItem(i);

    if (node) {
      // @ts-ignore
      result.push(node);
    }
  }

  return result;
}

export function getXpathFromElement(el: HTMLElement): string {
  if (!el || el.nodeType != 1) {
    return "";
  }

  if (el.id) {
    return "//*[@id='" + el.id + "']";
  }

  const sames = [].filter.call(
    el.parentNode?.children,
    (x: HTMLElement) => x.tagName == el.tagName
  );

  return (
    // @ts-ignore
    getXpathFromElement(el.parentNode) +
    "/" +
    el.tagName.toLowerCase() +
    // @ts-ignore
    (sames.length > 1 ? "[" + ([].indexOf.call(sames, el) + 1) + "]" : "")
  );
}

export const xpathTransformers = {
  removeLast: (xpath: string) => xpath.split("/").slice(0, -1).join("/"),
  attachAllChildren: (xpath: string, childTag?: string) =>
    `${xpath}/${childTag ?? "*"}`,
};
