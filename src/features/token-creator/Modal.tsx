import { NodeParserResult } from "@gui/lib/parser";
import { getXpathFromElement, xpathTransformers } from "@gui/lib/xpath";
import { ModalUI } from "@gui/ui/organisms";
import { Pane, Text, Label, TextInput, Checkbox } from "evergreen-ui";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { addToken } from "./models";

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
}: {
  node: NodeParserResult | null;
  onClose: () => void;
}) {
  const [tokenName, setTokenName] = useState("");
  const [allChildren, setAllChildren] = useState(false);
  const [onlyByTag, setOnlyByTag] = useState(true);

  const nodetag = node && onlyByTag ? node.name : "*";

  const xpath = useMemo(
    () => (node ? getXpathFromElement(node.node) : ""),
    [node]
  );

  const mappedXpath = useMemo(
    () =>
      !allChildren ? xpath : attachAllChildren(removeLast(xpath), nodetag),
    [allChildren, xpath, nodetag]
  );

  return (
    <ModalUI
      isOpened={!!node}
      closeModal={onClose}
      onConfirm={() => {
        addToken({ xpath: mappedXpath, name: tokenName });
        onClose();
      }}
      confirmLabel="Create"
    >
      <PaneUI>
        <PaneSettings>
          <FormWrapper>
            <Label>Xpath: </Label>
            <Text>{mappedXpath}</Text>
          </FormWrapper>
          <FormWrapper>
            <Label>All children from parent: </Label>
            <Checkbox
              checked={allChildren}
              onChange={() => setAllChildren((prev) => !prev)}
            />
          </FormWrapper>
          <FormWrapper>
            <Label>Only by selected tag: </Label>
            <Checkbox
              checked={onlyByTag}
              onChange={() => setOnlyByTag((prev) => !prev)}
            />
          </FormWrapper>
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
