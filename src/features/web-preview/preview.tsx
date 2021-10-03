import { useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { html } from "@gui/assets/mock";
import { useOverlay, useOverlayComponent } from "@gui/lib/overlay";

const Iframe = styled.iframe`
  width: 100%;
  flex: 1;
  border: 0;
  overflow: scroll;
`;

export function WebPreview() {
  const [ref, setRef] = useState<HTMLIFrameElement | null>(null);
  const { setRoot, root } = useOverlay();
  const jsx = useOverlayComponent();

  const mountNode = root?.body;

  const props =
    process.env.NODE_ENV === "development"
      ? {
          srcDoc: html,
        }
      : {
          src: "https://dmitryshelomanov.github.io/",
        };

  return (
    <Iframe
      ref={setRef}
      {...props}
      onLoad={() => {
        if (ref?.contentWindow?.document) {
          console.log("load");
          setRoot(ref?.contentWindow?.document);
        }
      }}
    >
      {mountNode && createPortal(jsx, mountNode)}
    </Iframe>
  );
}
