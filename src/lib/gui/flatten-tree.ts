import { omit } from "lodash";
import { TokensScheme, Token } from "./types";

function create(scheme?: TokensScheme): TokensScheme {
  return scheme ?? {};
}

function addToken({
  tree,
  token,
}: {
  tree: TokensScheme;
  token: Omit<Token, "children">;
}) {
  return {
    ...tree,
    [token.name]: { ...token, children: [] },
  };
}

function addChild({
  tree,
  token,
  parentId,
}: {
  tree: TokensScheme;
  token: Omit<Token, "children">;
  parentId: string;
}) {
  return {
    ...tree,
    [parentId]: {
      ...tree[parentId],
      children: [...tree[parentId].children, token.name],
    },
    [token.name]: { ...token, children: [], parentId },
  };
}

function removeToken({
  tree,
  tokenId,
  parentId,
}: {
  tree: TokensScheme;
  tokenId: string;
  parentId?: string;
}) {
  const { [tokenId]: removedToken } = tree;

  const idsForRemove = [tokenId, ...removedToken.children].filter(Boolean);

  const nextState = omit(tree, idsForRemove) as TokensScheme;

  if (parentId && nextState[parentId]) {
    return {
      ...nextState,
      [parentId]: {
        ...nextState[parentId],
        children: nextState[parentId].children.filter((it) => it !== tokenId),
      },
    };
  }

  return nextState;
}

function extractRoots(scheme: TokensScheme) {
  const rootTokens = Object.keys(scheme)
    .filter((key) => !scheme[key].parentId)
    .map((key) => scheme[key]);

  return rootTokens;
}

export const flattenTree = {
  create,
  addChild,
  addToken,
  removeToken,
  extractRoots,
};
