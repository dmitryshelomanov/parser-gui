import plugin from "prettier/parser-babel";
import { format as f } from "prettier/standalone";

export const format = (code: string) =>
  f(code, { parser: "babel", plugins: [plugin] });
