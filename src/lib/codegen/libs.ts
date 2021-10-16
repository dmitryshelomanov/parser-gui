import { getElementFromXPath, getXpathFromElement } from "../xpath";

export function textExtractor(el: HTMLElement) {
  return el.textContent;
}

export function classList(el: HTMLElement) {
  return [...el.classList];
}

export function $element(element: HTMLElement, selector: string) {
  const findedElement = element.querySelector(selector);

  if (findedElement) {
    return findedElement;
  }

  throw new Error("element not fined: " + selector);
}

export function $$element(element: HTMLElement, selector: string) {
  const findedElements = element.querySelectorAll(selector);

  return findedElements;
}

export const defaultLibs = {
  $$element: $$element.toString(),
  $element: $element.toString(),
  classList: classList.toString(),
  textExtractor: textExtractor.toString(),
  getXpathFromElement: getXpathFromElement.toString(),
  getElementFromXPath: getElementFromXPath.toString(),
};
