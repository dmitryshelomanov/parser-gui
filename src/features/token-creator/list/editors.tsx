import { CodeEditor } from "@gui/lib/editor";
import { useStoreMap } from "effector-react";
import { CrossIcon } from "evergreen-ui";
import { $editors, changeCode, closeEditor } from "../models";

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

export function TokenEditor({ id }: { id: string }) {
  const parsedId = id.split("-")[1];

  const code = useStoreMap({
    store: $editors,
    keys: [parsedId],
    fn: (editors, [tokenId]) => editors[tokenId].code,
  });

  return (
    <CodeEditor
      value={code}
      onChange={(value) => {
        changeCode({ id: parsedId, code: value });
      }}
    />
  );
}
