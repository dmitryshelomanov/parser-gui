import { getFunctionFromCode, getImportsFromGUI } from "./traverse";

export function executeTransformer({
  code,
  args,
  libs,
}: {
  code: string;
  args: unknown[];
  libs: Record<string, unknown>;
}) {
  try {
    const { result, params } = getFunctionFromCode({
      code,
      name: "transformer",
      body: true,
    });

    const importedLibs = getImportsFromGUI({ code });

    const libsSource = importedLibs.reduce(
      (acc, lib) => (libs[lib] ? `${acc} \n const ${lib} = ${libs[lib]}` : acc),
      ""
    );

    const fn = eval(`(${params.join()}) => {
      ${libsSource}
      ${result.slice(1)}  
    `);

    return fn(args);
  } catch (error) {
    // @ts-ignore
    return error.toString();
  }
}
