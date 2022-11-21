/* eslint-disable import/prefer-default-export */
import { BookmarksProps } from '../Bookmarks/Bookmarks';
import { BookmarksMock } from '../Bookmarks/BookmarksMock';
import { BarProps } from './BookmarkBar';

const bookmarksArray: BookmarksProps[] = Array.from({ length: 5 }, (v, i) => ({
  ...BookmarksMock,
  id: i.toString(),
}));

export const BookmarkBarMock: BarProps = {
  title: 'account',
  add_date: '000000',
  last_modified: '000000',
  personal_toolbar_folder: true,
  bookmarks_array: bookmarksArray,
};
