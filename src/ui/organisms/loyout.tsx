import styled from "styled-components";

type Props = {
  jc?: "space-between" | "space-around" | "flex-start" | "flex-end";
  ai?: "center" | "flex-start" | "fle-end";
};

export const Col = styled.div<Props>`
  display: flex;
  justify-content: ${(p) => p.jc};
  align-items: ${(p) => p.ai};
  flex-direction: column;
`;

export const Row = styled.div<Props>`
  display: flex;
  justify-content: ${(p) => p.jc};
  align-items: ${(p) => p.ai};
  flex-direction: row;
`;
