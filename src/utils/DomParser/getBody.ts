import { Bar, BookmarkBody, WrapperTag } from '@/@types/BookmarkType';
import { getBar } from './getBar';

export const getBody = (_bars: Element[]): BookmarkBody => {
  const bars = _bars.map((bar): Bar => getBar(bar));
  const ret: BookmarkBody = {
    contentsWrapperTag: WrapperTag,
    Bars: bars,
  };
  return ret;
};
