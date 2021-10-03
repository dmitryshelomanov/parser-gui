export function getElementFromXPath(path: string, root: Document) {
  const bxpath = root.evaluate(
    path,
    root,
    root,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );

  return bxpath.singleNodeValue;
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
