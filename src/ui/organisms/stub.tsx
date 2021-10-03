import { BrowserRouter, Route } from "react-router-dom";
import { Pane, Text, TextInput, Heading } from "evergreen-ui";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const Head = styled(Heading)`
  margin-bottom: 12px;
`;

export function Stub() {
  return (
    <Wrapper>
      <Head size={900}>Set site url or paste code</Head>
      <TextInput
        value="https://dmitryshelomanov.github.io/"
        disabled
        size="large"
      />
    </Wrapper>
  );
}
