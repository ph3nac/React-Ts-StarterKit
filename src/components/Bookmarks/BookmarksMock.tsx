/* eslint-disable import/prefer-default-export */

import { BookmarkProps } from '../Bookmark/Bookmark';
import { BookmarkMock } from '../Bookmark/BookmarkMock';

const bookmarkArray: BookmarkProps[] = Array.from({ length: 5 }, (v, i) => ({
  ...BookmarkMock,
  id: i.toString(),
}));
export const BookmarksMock = {
  id: '0',
  title: 'title',
  add_date: '000000',
  last_modified: '000000',
  bookmarks: bookmarkArray,
};
