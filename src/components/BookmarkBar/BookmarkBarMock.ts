import { BarProps, ContentProps } from '@/@types/BookmarkTyep';
import { FolderMock } from '../Folder/FolderMock';
import { BookmarkMock } from '../Bookmark/BookmarkMock';

const contents: ContentProps[] = Array.from({ length: 5 }, (v, i) => ({
  ...FolderMock,
  id: i.toString(),
}));

const bookmarks: ContentProps[] = Array.from({ length: 5 }, (v, i) => ({
  ...BookmarkMock,
  id: i.toString(),
}));

export const BookmarkBarMock: BarProps = {
  title: 'Bookmark Bar',
  add_date: '000000',
  last_modified: '000000',
  personal_toolbar_folder: true,
  contents: contents,
};
