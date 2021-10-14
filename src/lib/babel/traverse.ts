import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

export function getFunctionFromCode({
  code,
  name,
  body = false,
}: {
  code: string;
  name: string;
  body?: boolean;
}) {
  let result = "";
  let params: string[] = [];
  const ast = parse(code);

  traverse(ast, {
    FunctionDeclaration(path) {
      if (path.node.id?.name === name) {
        result = !body
          ? generate(path.node).code
          : generate(path.node.body).code;

        params.push(...path.node.params.map((param) => generate(param).code));
      }
    },
  });

  return { result, params };
}
