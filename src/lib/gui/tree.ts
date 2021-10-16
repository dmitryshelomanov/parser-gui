import { Token, FullToken } from "./types";

function toTree(
  roots: Token[],
  flattenTree: Record<string, Token>,
  // @ts-ignore
  parentXpath?: string = ""
): FullToken[] {
  return roots.reduce(
    (acc: any[], it) => [
      ...acc,
      {
        ...it,
        children: toTree(
          it.children.map((child) => flattenTree[child]),
          flattenTree,
          parentXpath + it.xpath
        ),
        fullXpath: parentXpath + it.xpath,
      },
    ],
    []
  );
}

type Props<Result> = {
  mapper: (elements: HTMLElement[]) => Result[];
  finderByXpath: (xpath: string) => HTMLElement[];
  parentNodesCount?: number;
};

type T = Record<string, any | T[]>;

function toSplittedArray(ob: T, base: number) {
  const rs: any = [];
  const queue = [
    ...Object.keys(ob).map((key) => ({ key, parents: [] as string[] })),
  ];

  while (queue.length > 0) {
    const { key, parents } = queue.shift()!;
    let target = { ...ob };
    let targetSeatled = false;

    for (let i = 0; i < base; i++) {
      if (!rs[i]) {
        rs[i] = {};
      }

      let destination = rs[i];

      for (let parentId = 0; parentId < parents.length; parentId++) {
        const parent = parents[parentId];

        destination = destination[parent];

        if (!targetSeatled && !Array.isArray(ob[parent])) {
          target = { ...target[parent] };
          targetSeatled = true;
        }
      }

      if (Array.isArray(target[key])) {
        const start = i * Math.floor(target[key].length / base);
        const end = Math.floor(target[key].length / base) * (i + 1);
        const chunk = target[key].slice(start, end);

        destination[key] = chunk.length === 1 ? chunk[0] : chunk;
      } else {
        destination[key] = { ...target[key] };
      }
    }

    if (target[key] && !Array.isArray(target[key])) {
      queue.push(
        ...Object.keys(target[key]).map((nextKey) => ({
          key: nextKey,
          parents: [...parents, key],
        }))
      );
    }
  }

  return rs;
}

function traverse<Result>(
  nodes: FullToken[],
  { mapper, finderByXpath }: Props<Result>
): any {
  return nodes.reduce((acc, token) => {
    const nodes = finderByXpath(token.fullXpath);

    if (token.children.length === 0) {
      const rs = mapper(nodes);

      return {
        ...acc,
        [token.name]: rs.length > 1 ? rs : rs[0] ?? {},
      };
    }

    return {
      ...acc,
      [token.name]:
        nodes.length > 1 && !token.parentId
          ? toSplittedArray(
              traverse(token.children, {
                mapper,
                finderByXpath,
              }),
              nodes.length
            )
          : traverse(token.children, {
              mapper,
              finderByXpath,
            }),
    };
  }, {});
}

export const tree = {
  toTree,
  traverse,
};
