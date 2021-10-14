import { useCallback, useMemo, useState } from "react";
import { nodeParser, NodeParserResult } from "@gui/lib/parser";
import { getElementBounging, useOverlay } from "@gui/lib/overlay";
import { TokenModal } from "@gui/features/token-creator";
import { NodeTree, TreeContainer, OverlayChange } from "@gui/features/common";

export function CodePreview({ target }: { target: HTMLElement | null }) {
  const { setStyles, resetStyles } = useOverlay();
  const [selectedNode, setSelectedNode] = useState<NodeParserResult | null>(
    null
  );

  const nodeList = useMemo(
    () => (target ? nodeParser([target]) : []),
    [target]
  );
  const key = useMemo(() => (Math.random() * 10000).toString(), [target]);

  const changeOverlayStyles = useCallback(
    (action: OverlayChange) => {
      if (action.type === "set") {
        const next = getElementBounging(action.payload);

        setStyles((prev) => ({ ...prev, ...next }));
      } else {
        resetStyles();
      }
    },
    [setStyles, resetStyles]
  );

  if (!target) {
    return null;
  }

  return (
    <>
      <TreeContainer>
        <NodeTree
          key={key}
          nodeList={nodeList}
          changeOverlayStyles={changeOverlayStyles}
          onClick={setSelectedNode}
        />
      </TreeContainer>
      {selectedNode && (
        <TokenModal onClose={() => setSelectedNode(null)} node={selectedNode} />
      )}
    </>
  );
}
