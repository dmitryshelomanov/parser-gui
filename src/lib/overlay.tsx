import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const overlayContext = createContext({} as Omit<OverlayResult, "overlay">);
const overlayComponentContext = createContext<JSX.Element | null>(null);

export type OverlayResult = {
  overlay: JSX.Element;
  setRoot: (ar0: Document) => void;
  setStyles: (
    fn: (
      ar0: Record<string, string | number>
    ) => Record<string, string | number>
  ) => void;
  resetStyles: () => void;
  root?: Document;
  targetElement: HTMLElement | null;
};

type OverlayParams = {
  elementClicked: (element: HTMLElement) => void;
};

const block = {
  backgroundColor: "rgb(202 0 0 / 40%)",
  position: "fixed" as const,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  zIndex: 999999999,
  pointerEvents: "none" as const,
};

function getRect(target: HTMLElement) {
  if (target.nodeName === "#text" || target.nodeName === "#comment") {
    const range = target.ownerDocument.createRange();
    range.selectNode(target);

    const rect = range.getBoundingClientRect();
    range.detach();

    return rect;
  }

  const rect = target.getBoundingClientRect();

  return rect;
}

export function getElementBounging(target: HTMLElement) {
  const rect = getRect(target);

  return {
    width: rect.width,
    height: rect.height,
    top: rect.top + target.scrollTop,
    left: rect.left + target.scrollLeft,
  };
}

export function useOverlayFacade({
  elementClicked,
}: OverlayParams): OverlayResult {
  const [styles, setStyles] = useState(block);
  const refElementClicked = useRef(elementClicked);
  const [root, setRoot] = useState<Document>();
  const [targetElement, setTargetElement] = useState<HTMLElement | null>();

  const resetStyles = useCallback(() => {
    setStyles(block);
  }, []);

  useEffect(() => {
    if (root) {
      let lastElement: HTMLElement | null = null;

      const moveHandler = (event: MouseEvent & { target: HTMLElement }) => {
        const { target } = event;

        if (target && lastElement !== target && target.localName !== "html") {
          const currentStyles = getElementBounging(target);

          setStyles((prev) => ({
            ...prev,
            ...currentStyles,
          }));

          const prevLeave = target.onmouseleave;

          target.onmouseleave = () => {
            lastElement = null;
            setStyles(block);
            setTargetElement(null);
            target.onmouseleave = prevLeave;
          };

          lastElement = target;
          setTargetElement(target);
        }
      };

      const clickHandler = (event: MouseEvent & { target: HTMLElement }) => {
        event.preventDefault();

        if (refElementClicked.current) {
          refElementClicked.current(event.target);
        }
      };

      // @ts-ignore
      root.addEventListener("mousemove", moveHandler);
      // @ts-ignore
      root.addEventListener("click", clickHandler);

      return () => {
        // @ts-ignore
        root.removeEventListener("mousemove", moveHandler);
        // @ts-ignore
        root.removeEventListener("click", clickHandler);
      };
    }
  }, [root, setStyles]);

  if (refElementClicked.current !== elementClicked) {
    refElementClicked.current = elementClicked;
  }

  return {
    overlay: <div style={styles} />,
    setRoot,
    // @ts-ignore
    setStyles,
    resetStyles,
    root,
    targetElement: targetElement ?? null,
  };
}

export function OverlayProvider({
  children,
  ...props
}: { children: JSX.Element } & OverlayParams) {
  const { overlay, setRoot, setStyles, resetStyles, root, targetElement } =
    useOverlayFacade(props);

  const omittedOverlay = useMemo(() => {
    return {
      setRoot,
      setStyles,
      resetStyles,
      root,
      targetElement,
    };
  }, [setRoot, setStyles, resetStyles, root, targetElement]);

  return (
    <overlayContext.Provider value={omittedOverlay}>
      <overlayComponentContext.Provider value={overlay}>
        {children}
      </overlayComponentContext.Provider>
    </overlayContext.Provider>
  );
}

export function useOverlay() {
  const overlay = useContext(overlayContext);

  return overlay;
}

export function useOverlayComponent() {
  const overlay = useContext(overlayComponentContext);

  return overlay;
}

const ActiveNodeGuard = memo(
  ({
    children,
    isActive,
  }: {
    children: (arg0: boolean) => JSX.Element;
    isActive: boolean;
  }) => children(isActive),
  (x, y) => x.isActive === y.isActive
);

export function WithActivePreviewNode({
  children,
  currentNode,
}: {
  children: (arg0: boolean) => JSX.Element;
  currentNode: HTMLElement;
}) {
  const { targetElement } = useOverlay();

  return (
    <ActiveNodeGuard isActive={currentNode === targetElement}>
      {children}
    </ActiveNodeGuard>
  );
}
