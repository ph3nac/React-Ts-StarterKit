import { BarProps, BookmarkProps, FolderProps } from '@/@types/BookmarkTyep';
import { FolderMock } from '../Folder/FolderMock';
import { BookmarkMock } from '../Bookmark/BookmarkMock';

const folders: FolderProps[] = Array.from({ length: 5 }, (v, i) => ({
  ...FolderMock,
  id: i.toString(),
}));

const bookmarks: BookmarkProps[] = Array.from({ length: 5 }, (v, i) => ({
  ...BookmarkMock,
  id: i.toString(),
}));

export const BookmarkBarMock: BarProps = {
  title: 'Bookmark Bar',
  add_date: '000000',
  last_modified: '000000',
  personal_toolbar_folder: true,
  folders: folders,
  bookmarks: bookmarks,
};
