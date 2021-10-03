import { useState } from "react";
import styled from "styled-components";
import { Pane, Heading, Tablist, Tab, Paragraph } from "evergreen-ui";
import { OverlayProvider } from "@gui/lib/overlay";
import { WebPreview } from "@gui/features/web-preview";
import { CodePreview } from "@gui/features/code-preview";

const PaneUI = styled(Pane)`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

const TablistUI = styled(Tablist)`
  padding: 13px;
  margin: 0;
  border-bottom: 1px solid #e5e8ef;
`;

const Title = styled(Heading)`
  padding: 15px;
  border-bottom: 1px solid #e5e8ef;
`;

const Wrapper = styled.div`
  flex: 1;
  height: 100vh;
  margin: 0 16px;
  display: flex;
`;

const tabs = ["Code tools", "Some tab1", "Some tab2"];

export function HomePage() {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <OverlayProvider elementClicked={setElement}>
      <Wrapper>
        <PaneUI border="default">
          <Title size={600}>Web preview</Title>
          <WebPreview />
        </PaneUI>
        <PaneUI border="default" style={{ background: "#fcfdff" }}>
          <TablistUI marginRight={24}>
            {tabs.map((tab, index) => (
              <Tab
                key={tab}
                id={tab}
                onSelect={() => setSelectedIndex(index)}
                isSelected={index === selectedIndex}
                aria-controls={`panel-${tab}`}
              >
                {tab}
              </Tab>
            ))}
          </TablistUI>
          {element ? (
            <CodePreview target={element} />
          ) : (
            <Paragraph size={400}>
              Тут будут отображаться выбранные элементы
            </Paragraph>
          )}
        </PaneUI>
      </Wrapper>
    </OverlayProvider>
  );
}
