import styled, { css } from "styled-components";
import { NodeAttr } from "@gui/lib/parser";

type BaseProps = {
  lvl?: number;
  onHover?: () => void;
  onLeave?: () => void;
  onClick?: () => void;
  isActive?: boolean;
};

const tabSize = 15;

const colors = {
  tag: "#7d1076",
  attributeValue: "rgb(10, 48, 105)",
  attributeKey: "#91461c",
  text: "#30373e",
  commentColor: "green",
};

const TagWrapper = styled.div<{ lvl?: number; isActive?: boolean }>`
  color: ${colors.tag};
  font-weight: bold;
  display: block;
  margin-left: ${(p) => (p.lvl ?? 0) * tabSize}px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 14px;

  &:hover {
    background-color: #ac5c5c37;
  }

  ${(p) =>
    p.isActive &&
    css`
      background-color: #ac5c5c37;
    `}
`;

const TextWrapper = styled.div<{
  lvl?: number;
  isActive?: boolean;
  isComment?: boolean;
}>`
  display: block;
  margin-left: ${(p) => (p.lvl ?? 0) * tabSize}px;
  cursor: pointer;
  color: ${colors.text};
  transition: 0.2s;
  white-space: normal;
  font-size: 14px;

  &:hover {
    background-color: #ac5c5c37;
  }

  ${(p) =>
    p.isActive &&
    css`
      background-color: #ac5c5c37;
    `}

  ${(p) =>
    p.isComment &&
    css`
      font-size: 12px;
      color: ${colors.commentColor};
    `}
`;

const AttributesWrapper = styled.span`
  font-weight: normal;
  border: none;
  background: none;
  white-space: normal;
  margin-left: 5px;
`;

export const TreeContainer = styled.pre`
  padding: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  overflow: scroll;
  margin: 0;

  > div {
    font-weight: 100;
  }
`;

export function Tag({
  name,
  isOpened,
  attributes = [],
  lvl,
  onLeave,
  onHover,
  ...props
}: {
  name: string;
  isOpened: boolean;
  attributes?: NodeAttr[];
} & BaseProps) {
  const start = isOpened ? "<" : "</";
  const end = ">";

  return (
    <TagWrapper
      lvl={lvl}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      {...props}
    >
      {start}
      {name}
      {attributes.map((it) => (
        <AttributesWrapper key={it.name}>
          <span style={{ color: colors.attributeKey }}>{it.name}=</span>
          <span style={{ color: colors.attributeValue }}>"{it.value}"</span>
        </AttributesWrapper>
      ))}
      {end}
    </TagWrapper>
  );
}

export function Text({
  text,
  lvl,
  onHover,
  onLeave,
}: { text: string } & BaseProps) {
  return (
    <TextWrapper lvl={lvl} onMouseEnter={onHover} onMouseLeave={onLeave}>
      {text}
    </TextWrapper>
  );
}

export function Comment({ text, lvl }: { text: string } & BaseProps) {
  return (
    <TextWrapper lvl={lvl} isComment>
      {"<!-- "}
      {text}
      {" -->"}
    </TextWrapper>
  );
}
