export type NodeAttr = {
  name: string;
  value: string;
};

export type NodeParserResult = {
  name: string;
  node: HTMLElement;
  children: NodeParserResult[];
  value: string;
  attrs: NodeAttr[];
  id: number;
};

export function nodeParser(elements: HTMLElement[]) {
  const queue = [...elements];
  const result: NodeParserResult[] = [];
  const map = new WeakMap();
  let id = 0;

  while (queue.length > 0) {
    const node = queue.shift()!;
    // @ts-ignore
    const nodes = node.childNodes as HTMLElement[];

    const parentNode = node.parentElement ? map.get(node.parentElement) : null;

    const attrs = node.attributes
      ? [...node.attributes].map((it) => ({
          name: it.name,
          value: it.value,
        }))
      : [];

    const nodeInfo = {
      name: node.localName || node.nodeName,
      children: [],
      value: node.textContent?.replace(/  +|\n/gi, " ")?.trim() ?? "",
      node,
      attrs,
      id,
    };

    const isEmpty =
      (nodeInfo.name === "#text" || nodeInfo.name === "#comment") &&
      nodeInfo.value === "";

    if (parentNode && !isEmpty) {
      // @ts-ignore
      parentNode.children.push(nodeInfo);
    }

    if (!parentNode) {
      result.push(nodeInfo);
    }

    map.set(node, nodeInfo);
    queue.unshift(...[...nodes]);

    id += 1;
  }

  return result;
}
