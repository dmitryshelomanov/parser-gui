import { getFunctionFromCode } from "./traverse";

export function executeTransformer(code: string, ...args: unknown[]) {
  try {
    const { result, params } = getFunctionFromCode({
      code,
      name: "transformer",
      body: true,
    });

    const fn = eval(`(${params.join()}) => ${result}`);

    return fn(...args);
  } catch (error) {
    // @ts-ignore
    return error;
  }
}
