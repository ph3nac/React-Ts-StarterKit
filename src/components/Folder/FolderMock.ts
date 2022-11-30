import { ContentProps } from '@/@types/BookmarkType';
import { BookmarkMock } from '../Bookmark/BookmarkMock';

const contents: ContentProps[] = Array.from({ length: 5 }, (v, i) => ({
  ...BookmarkMock,
  id: i.toString(),
}));
export const FolderMock: ContentProps = {
  id: '0',
  title: 'title',
  add_date: '000000',
  last_modified: '000000',
  contents: contents,
  type: 'folder',
};
