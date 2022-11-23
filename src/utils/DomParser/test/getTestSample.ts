import {
  Bookmark,
  BookmarkTag,
  Content,
  Folder,
  FolderTag,
  WrapperTag,
} from '@/@types/BookmarkTyep';

export const contentSamples = {
  test1: [
    {
      tag: FolderTag,
      title: 'account',
      add_date: '1646478792',
      last_modified: '1668921574',
      contentsWrapperTag: WrapperTag,
      contents: [
        {
          tag: BookmarkTag,
          title: 'Glitch',
          add_date: '1646478784',
          href: 'https://glitch.com/dashboard',
          icon: '',
        } as Bookmark,
      ],
    } as Folder,
    {
      tag: BookmarkTag,
      title: 'Glitch',
      add_date: '1646478784',
      href: 'https://glitch.com/dashboard',
      icon: '',
    } as Bookmark,
  ] as Content[],
};
