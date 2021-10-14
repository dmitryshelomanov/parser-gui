import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { If, Switch, Then, Case } from "react-if";
import { Pane, Heading, Tablist, Tab, Paragraph, Pill } from "evergreen-ui";
import { OverlayProvider } from "@gui/lib/overlay";
import { WebPreview } from "@gui/features/web-preview";
import { CodePreview } from "@gui/features/code-preview";
import {
  TokensList,
  $openedEditors,
  TokenEditor,
  CloseEditorIcon,
  openEditor,
} from "@gui/features/token-creator";
import { $tokensCounter } from "@gui/features/token-creator";

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

export function HomePage() {
  const openedEditors = useStore($openedEditors);
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [selectedTabName, setSelectedTabName] = useState("Code tools");
  const counter = useStore($tokensCounter);

  const tabs = useMemo(
    () => [
      { name: "Code tools" },
      { name: "Tokens" },
      ...openedEditors.map((name) => ({ name: `editor-${name}` })),
    ],
    [openedEditors]
  );

  const selectedIndex = useMemo(
    () => tabs.findIndex((tab) => tab.name === selectedTabName),
    [selectedTabName, tabs]
  );

  useEffect(() => {
    setSelectedTabName("Code tools");
  }, [element]);

  useEffect(() => {
    if (!tabs[selectedIndex]) {
      setSelectedTabName("Code tools");
    }
  }, [tabs, selectedIndex]);

  useEffect(() => {
    return openEditor.watch((id) => {
      setSelectedTabName(`editor-${id}`);
    });
  }, [tabs]);

  return (
    <OverlayProvider elementClicked={setElement}>
      <Wrapper>
        <PaneUI border="default">
          <Title size={600}>Web preview</Title>
          <WebPreview />
        </PaneUI>
        <PaneUI border="default" style={{ background: "#fcfdff" }}>
          <TablistUI marginRight={24}>
            {tabs.map(({ name }, index) => (
              <Tab
                key={name}
                id={name}
                onSelect={() => setSelectedTabName(name)}
                isSelected={index === selectedIndex}
                aria-controls={`panel-${name}`}
              >
                {name}
                {name === "Tokens" && (
                  <Pill display="inline-flex" margin={8} color="red">
                    {counter}
                  </Pill>
                )}
                {name.startsWith("editor-") && <CloseEditorIcon id={name} />}
              </Tab>
            ))}
          </TablistUI>
          <If condition={!!tabs[selectedIndex]}>
            <Then>
              <Switch>
                <Case condition={tabs[0].name === tabs[selectedIndex]?.name}>
                  {element ? (
                    <CodePreview target={element} />
                  ) : (
                    <Paragraph size={400}>
                      Тут будут отображаться выбранные элементы
                    </Paragraph>
                  )}
                </Case>
                <Case condition={tabs[1].name === tabs[selectedIndex]?.name}>
                  <TokensList />
                </Case>
                <Case
                  condition={tabs[selectedIndex]?.name.startsWith("editor-")}
                >
                  <TokenEditor id={tabs[selectedIndex]?.name} />
                </Case>
              </Switch>
            </Then>
          </If>
        </PaneUI>
      </Wrapper>
    </OverlayProvider>
  );
}
