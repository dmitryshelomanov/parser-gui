import Inspector from "react-inspector";
import { useStore, useStoreMap } from "effector-react";
import {
  Pane,
  Text,
  ChevronRightIcon,
  ChevronUpIcon,
  EditIcon,
  RemoveIcon,
} from "evergreen-ui";
import { useState } from "react";
import styled from "styled-components";
import { NodeTree, TreeContainer } from "@gui/features/common";
import { executeTransformer } from "@gui/lib/babel";
import { defaultLibs } from "@gui/lib/codegen/libs";
import { useOverlay } from "@gui/lib/overlay";
import { nodeParser } from "@gui/lib/parser";
import { getElementFromXPath } from "@gui/lib/xpath";
import { Col, Row } from "@gui/ui/organisms";
import { $tokens, Token, openEditor, $editors, removeToken } from "../models";

const PaneUI = styled(Pane)`
  margin: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ShortInformation = styled(Row)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Additional = styled(Col)`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-top: 12px;
  border-top: 1px solid #e5e8ee;
`;

const Icons = styled.div`
  margin: 0 5px;
  cursor: pointer;
`;

function TokenItem({ token }: { token: Token }) {
  const [visible, setVisible] = useState(false);
  const { root } = useOverlay();
  const elements = root ? getElementFromXPath(token.xpath, root) : [];
  const parsed = elements ? nodeParser(elements) : [];

  const code = useStoreMap({
    store: $editors,
    keys: [token.name, elements],
    fn: (editors, [tokenId, nodes]) => {
      if (editors[tokenId]) {
        const { code } = editors[tokenId];

        return executeTransformer({
          code,
          args: nodes,
          libs: defaultLibs,
        });
      }

      return "";
    },
  });

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <PaneUI border="default" key={token.name}>
      <ShortInformation>
        <Col>
          <Text>Token name: {token.name}</Text>
          <Text>Xpath: {token.xpath}</Text>
        </Col>
        <Row>
          <Icons>
            <EditIcon
              onClick={() => {
                openEditor(token.name);
              }}
            />
          </Icons>
          <Icons>
            {visible ? (
              <ChevronUpIcon onClick={toggleVisible} />
            ) : (
              <ChevronRightIcon onClick={toggleVisible} />
            )}
          </Icons>
          <Icons>
            <RemoveIcon
              onClick={() => {
                removeToken(token.name);
              }}
            />
          </Icons>
        </Row>
      </ShortInformation>
      {visible && (
        <Additional>
          {parsed && (
            <TreeContainer>
              <NodeTree draft nodeList={parsed} />
            </TreeContainer>
          )}
          <Text>Result: </Text>
          <Inspector data={{ [token.name]: code }} expandLevel={10} />
        </Additional>
      )}
    </PaneUI>
  );
}

export function TokensList() {
  const tokens = useStore($tokens);

  return (
    <>
      {tokens.map((token) => (
        <TokenItem token={token} key={token.name} />
      ))}
    </>
  );
}
