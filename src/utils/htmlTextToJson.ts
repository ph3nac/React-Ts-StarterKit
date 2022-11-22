import {
  Bar,
  Bookmark,
  BookmarkBody,
  BookmarkHeader,
  BookmarkTag,
  Content,
  Folder,
  FolderTag,
  JsonDom,
  WrapperTag,
} from '@/@types/BookmarkTyep';
import { getDirectChildren } from './getDirectChildren';

const getContents = (barBody: Element): Content[] | undefined => {
  const contents = getDirectChildren(barBody, 'dt').map((content, i) => {
    if (getDirectChildren(content, 'a')[0]) {
      const bookmark = getDirectChildren(content, 'a')[0];
      const ret: Bookmark = {
        tag: BookmarkTag,
        title: bookmark.textContent!,
        href: bookmark.getAttribute('href')!,
        add_date: bookmark.getAttribute('add_date')!,
        icon: bookmark.getAttribute('icon')!,
      };
      return ret;
    }
    if (getDirectChildren(content, 'h3')[0]) {
      const folder = getDirectChildren(content, 'h3')[0];
      const ret: Folder = {
        tag: FolderTag,
        title: folder.textContent!,
        add_date: folder.getAttribute('add_date')!,
        last_modified: folder.getAttribute('last_modified')!,
        contentsWrapperTag: WrapperTag,
        contents: getContents(folder),
      };
      return ret;
    }
    return undefined;
  });
  if (contents.includes(undefined)) return undefined;
  return contents;
};

const getBar = (_bar: Element): Bar => {
  const barName = getDirectChildren(_bar, 'h3')[0];
  const barBody = getDirectChildren(_bar, 'dl')[0];
  let contents;
  if (barBody) {
    contents = getContents(barBody);
  }
  const ret: Bar = {
    tag: FolderTag,
    title: barName.textContent!,
    add_date: barName.getAttribute('add_date')!,
    last_modified: barName.getAttribute('last_modified')!,
    personal_toolbar_folder: barName.getAttribute('personal_toolbar_folder')!,
    contentsWrapperTag: WrapperTag,
    contents: contents,
  };
  return ret;
};

const getBody = (_bars: Element[]): BookmarkBody => {
  const bars = _bars.map((bar, i): Bar => getBar(bar));
  const ret: BookmarkBody = {
    contentsWrapperTag: WrapperTag,
    Bars: bars,
  };
  return ret;
};

const htmlTextToJson = (text: string): JsonDom => {
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

export default htmlTextToJson;
