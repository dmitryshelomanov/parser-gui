import { useStoreMap } from "effector-react";
import {
  CrossIcon,
  Pane,
  Text,
  Button,
  ChevronDownIcon,
  ChevronRightIcon,
} from "evergreen-ui";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import Incpector from "react-inspector";
import { TreeContainer, NodeTree } from "@gui/features/common";
import { CodeEditor } from "@gui/lib/editor";
import { useOverlay } from "@gui/lib/overlay";
import { nodeParser } from "@gui/lib/parser";
import { executeTransformer } from "@gui/lib/babel";
import { defaultLibs } from "@gui/lib/codegen/libs";
import { getElementFromXPath } from "@gui/lib/xpath";
import { Col, Row } from "@gui/ui/organisms";
import { $editors, changeCode, closeEditor, $tokensScheme } from "../models";

const EditorWrapper = styled(Col)`
  width: 100%;
  height: 100%;
`;

const NoticeWrapper = styled(Pane)`
  padding: 12px;
  max-height: 50%;
`;

const InspectorWrapper = styled.div`
  margin: 12px 0;
`;

export function CloseEditorIcon({ id }: { id: string }) {
  const parsedId = id.split("-")[1];

  return (
    <CrossIcon
      margin={8}
      onClick={() => {
        closeEditor(parsedId);
      }}
    />
  );
}

const Notice = memo(({ id }: { id: string }) => {
  const [opened, setOpened] = useState(true);
  const [result, setResult] = useState(null);
  const { root, changeOverlayStyles } = useOverlay();

  const token = useStoreMap({
    store: $tokensScheme,
    keys: [id],
    fn: (tokens, [tokenId]) => tokens[tokenId] ?? null,
  });

  const { xpath = "" } = token ?? {};
  const elements = getElementFromXPath(xpath, root);
  const nodes = nodeParser(elements);

  const code = useStoreMap({
    store: $editors,
    keys: [id],
    fn: (editors, [tokenId]) => {
      if (editors[tokenId]) {
        const { code } = editors[tokenId];

        return code;
      }

      return "";
    },
  });

  const toggle = () => {
    setOpened((prev) => !prev);
  };

  const execure = () => {
    setResult(
      executeTransformer({
        code,
        args: elements,
        libs: defaultLibs,
      })
    );
  };

  return (
    <NoticeWrapper>
      <Row jc="flex-end" ai="center" onClick={toggle}>
        <Text>Board</Text>
        {opened ? <ChevronDownIcon /> : <ChevronRightIcon />}
      </Row>
      {opened && (
        <>
          <Button onClick={execure}>Test</Button>
          <Col>
            {result && (
              <InspectorWrapper>
                <Incpector data={{ [id]: result }} expandLevel={1} />
              </InspectorWrapper>
            )}
            <TreeContainer>
              <NodeTree
                nodeList={nodes}
                changeOverlayStyles={changeOverlayStyles}
              />
            </TreeContainer>
          </Col>
        </>
      )}
    </NoticeWrapper>
  );
});

export function TokenEditor({ id }: { id: string }) {
  const parsedId = id.split("-")[1];
  const code = useStoreMap({
    store: $editors,
    keys: [parsedId],
    fn: (editors, [tokenId]) => editors[tokenId].code,
  });

  return (
    <EditorWrapper>
      <CodeEditor
        value={code}
        onChange={(value) => {
          changeCode({ id: parsedId, code: value });
        }}
      />
      <Notice id={parsedId} key={parsedId} />
    </EditorWrapper>
  );
}
