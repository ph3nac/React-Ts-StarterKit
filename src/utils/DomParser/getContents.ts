import {
  Bookmark,
  BookmarkTag,
  Content,
  Folder,
  FolderTag,
  WrapperTag,
} from '@/@types/BookmarkType';
import { getDirectChildren } from './getDirectChildren';

export const getContents = (barBody: Element): Content[] | undefined => {
  let contents: Array<Content> | undefined;
  getDirectChildren(barBody, 'dt').forEach((content) => {
    if (contents === undefined) {
      contents = [];
    }
    if (getDirectChildren(content, 'a')[0]) {
      const bookmark = getDirectChildren(content, 'a')[0];
      const elem: Bookmark = {
        tag: BookmarkTag,
        title: bookmark.textContent!.trim(),
        href: bookmark.getAttribute('href')!,
        add_date: bookmark.getAttribute('add_date')!,
        icon: bookmark.getAttribute('icon')!,
        type: 'bookmark',
      };
      contents?.push(elem);
    }
    if (getDirectChildren(content, 'h3')[0]) {
      const folder = getDirectChildren(content, 'h3')[0];
      const folderBody = getDirectChildren(content, 'dl')[0];
      const elem: Folder = {
        tag: FolderTag,
        title: folder.textContent!.trim(),
        add_date: folder.getAttribute('add_date')!,
        last_modified: folder.getAttribute('last_modified')!,
        contentsWrapperTag: WrapperTag,
        contents: getContents(folderBody),
        type: 'folder',
      };
      contents?.push(elem);
    }
  });
  return contents;
};
