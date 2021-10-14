import { LIBS, PAGE } from "./constants";

export function attachLibs(type: string, body: string) {
  const code = `
    window.${LIBS}.${type} = ${body}
  `;

  return code;
}

export function evulate({ body, args }: { body: string[]; args?: string[] }) {
  const mappedArgs = args ? args.join(", ") : "";
  const code = `
    // Code inside run in browser
    // All args must pass to
    return ${PAGE}.evulate((${mappedArgs}) => {
      ${body.join(";")}
    })
  `;

  return code;
}

export function wrapp({
  body,
  name,
  args,
  notice,
}: {
  body: string[];
  name: string;
  args: string[];
  notice?: string;
}) {
  const code = `
    ${notice}
    function ${name}(${args.join(", ")}) {
      ${body.join(" ")} 
    }
  `;

  return code;
}

export function returnS({
  type,
  fields,
}: {
  type: "object" | "array" | "alone";
  fields: string[];
}) {
  switch (type) {
    case "object":
      return `
        return {${fields.join(",")}}
      `;

    case "array":
      return `
          return [${fields.join(",")}]
        `;

    default:
      return `
          return ${fields.join(",")}
        `;
  }
}
