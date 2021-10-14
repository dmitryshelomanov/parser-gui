import { createEvent, createStore } from "effector";

export type Token = { xpath: string; name: string };

export const addToken = createEvent<Token>();
export const removeToken = createEvent<string>();

export const $tokens = createStore<Token[]>([])
  .on(addToken, (state, token) => [...state, token])
  .on(removeToken, (state, id) => state.filter((token) => token.name !== id));

export const $tokensCounter = $tokens.map((tokens) => tokens.length);
