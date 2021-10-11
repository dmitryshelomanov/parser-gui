import { NodeParserResult } from "@gui/lib/parser";
import { WithActivePreviewNode } from "@gui/lib/overlay";
import { Tag, Text, Comment } from "./elements";

export type OverlayChange =
  | { type: "reset"; payload?: {} }
  | { type: "set"; payload: HTMLElement };

export function NodeTree({
  nodeList,
  lvl = 0,
  changeOverlayStyles,
  draft = false,
  onClick,
}: {
  nodeList: NodeParserResult[];
  lvl?: number;
  changeOverlayStyles?: (arg0: OverlayChange) => void;
  draft?: boolean;
  onClick?: (arg0: NodeParserResult) => void;
}) {
  return (
    <>
      {nodeList.map((node) => {
        const props = draft
          ? {}
          : {
              onHover: () => {
                if (changeOverlayStyles) {
                  changeOverlayStyles({ type: "set", payload: node.node });
                }
              },
              onLeave: () => {
                if (changeOverlayStyles) {
                  changeOverlayStyles({ type: "reset" });
                }
              },
              onClick: () => {
                if (onClick) {
                  onClick(node);
                }
              },
            };

        if (node.name === "#text") {
          return <Text text={node.value} lvl={lvl} {...props} key={node.id} />;
        }

        if (node.name === "#comment") {
          return <Comment text={node.value} lvl={lvl} key={node.id} />;
        }

        return (
          <WithActivePreviewNode key={node.id} currentNode={node.node}>
            {(isActive) => (
              <>
                <Tag
                  name={node.name}
                  isOpened
                  lvl={lvl}
                  attributes={node.attrs}
                  {...props}
                  key={`${node.id}-opened`}
                  isActive={isActive}
                />
                <NodeTree
                  nodeList={node.children}
                  lvl={lvl + 1}
                  changeOverlayStyles={changeOverlayStyles}
                  key={`${node.id}-children`}
                  draft={draft}
                  onClick={onClick}
                />
                <Tag
                  name={node.name}
                  isOpened={false}
                  lvl={lvl}
                  {...props}
                  key={`${node.id}-closed`}
                  isActive={isActive}
                />
              </>
            )}
          </WithActivePreviewNode>
        );
      })}
    </>
  );
}
