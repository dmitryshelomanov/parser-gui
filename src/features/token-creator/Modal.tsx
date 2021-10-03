import { NodeParserResult } from "@gui/lib/parser";
import { getXpathFromElement, getElementFromXPath } from "@gui/lib/xpath";
import { ModalUI } from "@gui/ui/organisms";
import { Pane, Text, Heading, Label, InlineAlert } from "evergreen-ui";
import { useMemo } from "react";
import styled from "styled-components";
import { NodeTree, TreeContainer } from "../common";

const PaneUI = styled(Pane)`
  display: flex;
  margin-bottom: 65px;
  justify-content: space-between;
  flex: 1 1 auto;
`;

const PaneSettings = styled(Pane)`
  flex: 1;
  padding-left: 15px;
`;

const ModalHeading = styled(Heading)`
  padding: 15px;
`;

export function TokenModal({
  node,
  onClose,
}: {
  node: NodeParserResult | null;
  onClose: () => void;
}) {
  const xpath = useMemo(
    () => (node ? getXpathFromElement(node.node) : ""),
    [node]
  );

  const element = useMemo(
    () => (node ? getElementFromXPath(xpath, node.node.ownerDocument) : null),
    [xpath, node]
  );

  const areEq = element === node?.node;

  return (
    <ModalUI isOpened={!!node} closeModal={onClose}>
      <PaneUI>
        <TreeContainer>
          <ModalHeading>Preview Elements</ModalHeading>
          {node && <NodeTree nodeList={[node]} />}
        </TreeContainer>
        <PaneSettings>
          <div>
            <ModalHeading>Settings</ModalHeading>
            <Label>Xpath: </Label>
            <Text>{xpath}</Text>
            {node && (
              <div>
                <InlineAlert
                  intent={areEq ? "success" : "danger"}
                  children={
                    areEq
                      ? "Элемент найден по xpath"
                      : "Этот элемент не был найдет по xpath"
                  }
                />
              </div>
            )}
          </div>
        </PaneSettings>
      </PaneUI>
    </ModalUI>
  );
}
