import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

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
              style={{ width, height }}
              mode="javascript"
              theme="solarized_light"
              name="editor"
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
          );
        }}
      </AutoSizer>
    </Wrapper>
  );
}
