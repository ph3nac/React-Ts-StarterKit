import { Bar, FolderTag, WrapperTag } from '@/@types/BookmarkType';
import { getContents } from './getContents';
import { getDirectChildren } from './getDirectChildren';

export const getBar = (_bar: Element): Bar => {
  const barName = getDirectChildren(_bar, 'h3')[0];
  const barBody = getDirectChildren(_bar, 'dl')[0];
  let contents;
  if (barBody) {
    contents = getContents(barBody);
  }
  const ret: Bar = {
    tag: FolderTag,
    title: barName.textContent!.trim(),
    add_date: barName.getAttribute('add_date')!,
    last_modified: barName.getAttribute('last_modified')!,
    personal_toolbar_folder: barName.getAttribute('personal_toolbar_folder')!,
    contentsWrapperTag: WrapperTag,
    contents: contents,
  };
  return ret;
};
