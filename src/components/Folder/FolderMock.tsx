/* eslint-disable import/prefer-default-export */
import { BookmarkProps } from '@/@types/BookmarkTyep';
import { BookmarkMock } from '../Bookmark/BookmarkMock';

const bookmarks: BookmarkProps[] = Array.from({ length: 5 }, (v, i) => ({
  ...BookmarkMock,
  id: i.toString(),
}));
export const FolderMock = {
  id: '0',
  title: 'title',
  add_date: '000000',
  last_modified: '000000',
  bookmarks: bookmarks,
};
