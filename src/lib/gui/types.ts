export type Token = {
  xpath: string;
  name: string;
  children: string[];
  parentId?: string;
};

export type FullToken = Omit<Token, "children"> & {
  children: FullToken[];
  fullXpath: string;
};

export type TokensScheme = Record<string, Token>;
