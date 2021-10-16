import { Pane, Text, ChevronDownIcon, ChevronRightIcon } from "evergreen-ui";
import { memo, useState } from "react";
import styled from "styled-components";
import Incpector from "react-inspector";
import { Col, Row } from "@gui/ui/organisms";

const NoticeWrapper = styled(Pane)`
  padding: 12px;
  max-height: 50%;
  position: sticky;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e5e8ef;
  background: #fff;
  margin-top: auto;
`;

const InspectorWrapper = styled.div`
  margin: 12px 0;
`;

export const Notice = memo(
  ({ result, children }: { result: any; children?: JSX.Element }) => {
    const [opened, setOpened] = useState(true);

    const toggle = () => {
      setOpened((prev) => !prev);
    };

    return (
      <NoticeWrapper>
        <Row jc="flex-end" ai="center" onClick={toggle}>
          <Text>Board</Text>
          {opened ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </Row>
        {opened && (
          <>
            <Col>
              {result && (
                <InspectorWrapper>
                  <Incpector data={result} expandLevel={10} />
                </InspectorWrapper>
              )}
              {children}
            </Col>
          </>
        )}
      </NoticeWrapper>
    );
  }
);
