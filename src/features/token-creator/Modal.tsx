import { NodeParserResult } from "@gui/lib/parser";
import { getXpathFromElement, xpathTransformers } from "@gui/lib/xpath";
import { FullToken } from "@gui/lib/gui";
import { Col, ModalUI, Row } from "@gui/ui/organisms";
import { Pane, Text, Label, TextInput } from "evergreen-ui";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { addToken, addChildren } from "./models";

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

const FormWrapper = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;

  > label {
    margin: 0;
    margin-right: 3;
  }
`;

const { removeLast, attachAllChildren } = xpathTransformers;

export function TokenModal({
  node,
  onClose,
  parentToken,
  fullXpath = "",
}: {
  node: NodeParserResult | null;
  onClose: () => void;
  parentToken?: FullToken;
  fullXpath?: string;
}) {
  const [tokenName, setTokenName] = useState("");

  const xpath = useMemo(() => {
    if (node) {
      return getXpathFromElement(node.node);
    }

    return "";
  }, [node]);

  const [xpathPart, setXpathPart] = useState(xpath);

  return (
    <ModalUI
      width="50vw"
      isOpened={!!node}
      closeModal={onClose}
      onConfirm={() => {
        if (parentToken) {
          addChildren({
            token: { xpath: xpathPart, name: tokenName },
            parentId: parentToken.name,
          });
        } else {
          addToken({ xpath: xpathPart, name: tokenName });
        }
        onClose();
      }}
      confirmLabel={parentToken ? `Add child to ${parentToken.name}` : "Create"}
    >
      <PaneUI>
        <PaneSettings>
          <Col>
            {node && (
              <Row>
                <Label>Classes: </Label>
                <Text>
                  {JSON.stringify(
                    node.attrs.find((it) => it.name === "class")?.value
                  )}
                </Text>
              </Row>
            )}
            <Row>
              <Label>Full Xpath: </Label>
              <Text>{xpathPart}</Text>
            </Row>
            <FormWrapper>
              <Label>Custom Xpath: </Label>
              <TextInput
                value={xpathPart}
                // @ts-ignore
                onChange={(event) => setXpathPart(event.target.value)}
                placeholder="Xpath part"
              />
            </FormWrapper>
          </Col>
          <FormWrapper>
            <Label>Token name: </Label>
            <TextInput
              value={tokenName}
              // @ts-ignore
              onChange={(event) => setTokenName(event.target.value)}
            />
          </FormWrapper>
        </PaneSettings>
      </PaneUI>
    </ModalUI>
  );
}
