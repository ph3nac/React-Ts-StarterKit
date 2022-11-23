export const stringToElement = (html: string, selector: string): Element =>
  new DOMParser().parseFromString(html, 'text/html').querySelector(selector)!;
