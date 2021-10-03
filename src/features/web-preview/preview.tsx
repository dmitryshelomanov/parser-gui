import { useEffect, useLayoutEffect, useState } from "react";
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
  const { setRoot } = useOverlay();
  const jsx = useOverlayComponent();

  const document = ref?.contentWindow?.document;
  const mountNode = ref?.contentWindow?.document?.body;

  useLayoutEffect(() => {
    if (document) {
      document.write(html);
      document.close();
    }
  }, [document]);

  useEffect(() => {
    if (document) {
      setRoot(document);
    }
  }, [mountNode, setRoot]);

  return (
    <Iframe ref={setRef}>{mountNode && createPortal(jsx, mountNode)}</Iframe>
  );
}
