export function flat(target: HTMLElement): HTMLElement[] {
  return [
    target,
    // @ts-ignore
    ...[...target.children].reduce((acc, it) => [...acc, ...flat(it)], []),
  ];
}
