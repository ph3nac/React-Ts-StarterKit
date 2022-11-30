import { BarProps, ContentProps } from '@/@types/BookmarkType';
import { FolderMock } from '../Folder/FolderMock';
import { BookmarkMock } from '../Bookmark/BookmarkMock';

const contents: ContentProps[] = Array.from({ length: 5 }, (v, i) => {
  if (i === 3) {
    return {
      ...BookmarkMock,
      id: i.toString(),
    };
  }

  return {
    ...FolderMock,
    id: i.toString(),
  };
});

export const BookmarkBarMock: BarProps = {
  title: 'Bookmark Bar',
  add_date: '000000',
  last_modified: '000000',
  personal_toolbar_folder: true,
  contents: contents,
};
