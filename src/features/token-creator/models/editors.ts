import { format } from "@gui/lib/codegen/prettier";
import { wrapp } from "@gui/lib/codegen/tokens";
import { createEvent, createStore } from "effector";
import { removeToken } from "./tokens";

export type Editor = { opened: boolean; code: string };

const initalState = {
  opened: true,
  code: format(
    wrapp({
      name: "transformer",
      body: ["return element.textContent"],
      args: ["[element]"],
      notice: "// Код запускается на сервере принимая на вход HTMLElement[]",
    })
  ),
};

export const openEditor = createEvent<string>();
export const closeEditor = createEvent<string>();
export const changeCode = createEvent<{ id: string; code: string }>();

export const $editors = createStore<Record<string, Editor>>({})
  .on(openEditor, (state, id) => ({
    ...state,
    [id]: state[id] ? { ...state[id], opened: true } : initalState,
  }))
  .on(closeEditor, (state, id) => ({
    ...state,
    [id]: { ...state[id], opened: false },
  }))
  .on(changeCode, (state, { id, code }) => ({
    ...state,
    [id]: { ...state[id], code },
  }))
  .on(removeToken, (state, name) => {
    const { [name]: _, ...rest } = state;

    return rest;
  });

export const $openedEditors = $editors.map((editors) =>
  Object.keys(editors).filter((id) => editors[id].opened)
);
