import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import {
  ImportSpecifier,
  ImportDefaultSpecifier,
  ImportNamespaceSpecifier,
} from "@babel/types";
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
  const ast = parse(code, { sourceType: "module" });

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

export function getImportsFromGUI({ code }: { code: string }) {
  let result: string[] = [];
  const ast = parse(code, { sourceType: "module" });

  function isImportSpecifier(
    node: ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier
  ): node is ImportSpecifier {
    return node.type === "ImportSpecifier";
  }

  traverse(ast, {
    ImportDeclaration(path) {
      if (path.node.source.value === "gui") {
        result = [...path.node.specifiers]
          .filter(isImportSpecifier)
          .reduce(
            (acc: string[], it: ImportSpecifier) =>
              it.imported.type === "Identifier"
                ? [...acc, it.imported.name]
                : acc,
            []
          );
      }
    },
  });

  return result;
}
