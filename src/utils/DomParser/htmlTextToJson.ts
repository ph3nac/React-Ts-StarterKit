import { BookmarkHeader, JsonDom } from '@/@types/BookmarkType';
import { getBody } from './getBody';
import { getDirectChildren } from './getDirectChildren';

export const htmlTextToJson = (text: string): JsonDom => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  const body = doc.querySelector('dl')!;
  const bars = getDirectChildren(body, 'dt');

  const bookmarkBody = getBody(bars);
  const ret: JsonDom = {
    header: BookmarkHeader,
    body: bookmarkBody,
  };
  return ret;
};
