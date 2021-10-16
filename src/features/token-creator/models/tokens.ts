import { tree, flattenTree, Token } from "@gui/lib/gui";
import { combine, createEvent, createStore } from "effector";
import { createMock } from "./mock";

export const addToken = createEvent<Omit<Token, "children">>();
export const addChildren =
  createEvent<{ token: Omit<Token, "children">; parentId: string }>();
export const removeToken = createEvent<{ parentId?: string; id: string }>();

export const $tokensScheme = createStore<Record<string, Token>>(createMock())
  .on(addToken, (tree, token) => flattenTree.addToken({ tree, token }))
  .on(addChildren, (tree, { token, parentId }) =>
    flattenTree.addChild({ tree, token, parentId })
  )
  .on(removeToken, (tree, { id, parentId }) =>
    flattenTree.removeToken({ tree, parentId, tokenId: id })
  );

export const $rootTokens = $tokensScheme.map(flattenTree.extractRoots);

export const $tokensCounter = $rootTokens.map((tokens) => tokens.length);

export const $tokensTree = combine(
  { root: $rootTokens, scheme: $tokensScheme },
  ({ root, scheme }) => tree.toTree(root, scheme, "")
);
