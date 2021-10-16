import { useMemo, useState } from "react";
import { nodeParser, NodeParserResult } from "@gui/lib/parser";
import { useOverlay } from "@gui/lib/overlay";
import { TokenModal } from "@gui/features/token-creator";
import { NodeTree, TreeContainer } from "@gui/features/common";

export function CodePreview({ target }: { target: HTMLElement | null }) {
  const { changeOverlayStyles } = useOverlay();
  const [selectedNode, setSelectedNode] = useState<NodeParserResult | null>(
    null
  );

  const nodeList = useMemo(
    () => (target ? nodeParser([target]) : []),
    [target]
  );
  const key = useMemo(() => (Math.random() * 10000).toString(), [target]);

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
