import { createEvent, createStore } from "effector";

export type Token = { xpath: string; name: string };

export const addToken = createEvent<Token>();

export const $tokens = createStore<Token[]>([]).on(addToken, (state, token) => [
  ...state,
  token,
]);

export const $tokensCounter = $tokens.map((tokens) => tokens.length);
