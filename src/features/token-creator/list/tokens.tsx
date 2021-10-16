import { useStore } from "effector-react";
import {
  Pane,
  Text,
  ChevronRightIcon,
  ChevronUpIcon,
  EditIcon,
  RemoveIcon,
} from "evergreen-ui";
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { NodeTree, TreeContainer } from "@gui/features/common";
import { useOverlay } from "@gui/lib/overlay";
import { nodeParser, NodeParserResult } from "@gui/lib/parser";
import { getElementFromXPath } from "@gui/lib/xpath";
import { FullToken, tree } from "@gui/lib/gui";
import { Col, Row } from "@gui/ui/organisms";
import { TokenModal } from "../Modal";
import { openEditor, $tokensTree, removeToken } from "../models";
import { Notice } from "./Notice";
import { ChildTypesSelect } from "./childTypeSelect";

const TokensWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: scroll;
`;

const PaneUI = styled(Pane)`
  margin: 5px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: #fff !important;
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

const ChildrenWrapper = styled.div`
  width: 100%;
`;

function TokenItem({ token }: { token: FullToken }) {
  const [visible, setVisible] = useState(false);
  const { root, changeOverlayStyles } = useOverlay();
  const elements = root ? getElementFromXPath(token.fullXpath, root) : [];
  const parsed = elements ? nodeParser(elements) : [];
  const [selectedNode, setSelectedNode] = useState<NodeParserResult | null>(
    null
  );

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <PaneUI border="default" key={token.name}>
      <ShortInformation>
        <Col>
          <Text>
            Token name: <b>{token.name}</b>
          </Text>
          <Text>
            Xpath: <b>{token.xpath}</b>
          </Text>
          <Text>
            Children count: <b>{elements.length}</b>
          </Text>
        </Col>
        <Row ai="center">
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
                removeToken({ id: token.name, parentId: token.parentId });
              }}
            />
          </Icons>
        </Row>
      </ShortInformation>
      <ChildrenWrapper>
        {token.children &&
          token.children.map((it) => <TokenItem token={it} key={it.name} />)}
      </ChildrenWrapper>
      {visible && (
        <Additional>
          {parsed && (
            <TreeContainer>
              <NodeTree
                draft
                nodeList={parsed}
                onClick={setSelectedNode}
                changeOverlayStyles={changeOverlayStyles}
              />
            </TreeContainer>
          )}
        </Additional>
      )}
      {selectedNode && (
        <TokenModal
          onClose={() => setSelectedNode(null)}
          node={selectedNode}
          parentToken={token}
          fullXpath={token.fullXpath}
        />
      )}
    </PaneUI>
  );
}

export function TokensList() {
  const { root } = useOverlay();
  const tokensTree = useStore($tokensTree);

  const elementFinder = useCallback(
    (xpath: string) => (root ? getElementFromXPath(xpath, root) : []),
    [root]
  );

  const result = useMemo(
    () =>
      tree.traverse(tokensTree, {
        mapper: (elements) => elements.map((it) => it.textContent),
        finderByXpath: elementFinder,
      }),
    [elementFinder, tokensTree]
  );

  return (
    <TokensWrapper>
      {tokensTree.map((token) => (
        <TokenItem token={token} key={token.name} />
      ))}
      <Notice result={result} />
    </TokensWrapper>
  );
}
