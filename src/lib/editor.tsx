import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/mode-javascript";
import AutoSizer from "react-virtualized-auto-sizer";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export function CodeEditor({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (arg0: string) => void;
}) {
  return (
    <Wrapper>
      <AutoSizer>
        {({ width, height }) => {
          return (
            <AceEditor
              value={value}
              onChange={(nextValue) => {
                if (onChange) {
                  onChange(nextValue);
                }
              }}
              tabSize={2}
              style={{ width, height }}
              mode="javascript"
              theme="solarized_light"
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
            />
          );
        }}
      </AutoSizer>
    </Wrapper>
  );
}
