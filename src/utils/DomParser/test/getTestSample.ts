import {
  Bookmark,
  BookmarkTag,
  Content,
  Folder,
  FolderTag,
  WrapperTag,
  Bar,
  BookmarkBody,
  BookmarkHeader,
} from '@/@types/BookmarkType';

export const contentSamples = {
  test1: [
    {
      type: 'folder',
      tag: FolderTag,
      title: 'account',
      add_date: '1646478792',
      last_modified: '1668921574',
      contentsWrapperTag: WrapperTag,
      contents: [
        {
          type: 'bookmark',
          tag: BookmarkTag,
          title: 'Glitch',
          add_date: '1646478784',
          href: 'https://glitch.com/dashboard',
          icon: '',
        } as Bookmark,
      ],
    } as Folder,
    {
      type: 'bookmark',
      tag: BookmarkTag,
      title: 'Glitch',
      add_date: '1646478784',
      href: 'https://glitch.com/dashboard',
      icon: '',
    } as Bookmark,
  ] as Content[],
};

export const BarSamples = {
  test1: {
    tag: FolderTag,
    title: 'Bookmarks Bar',
    add_date: '1618827550',
    last_modified: '1668921581',
    personal_toolbar_folder: 'true',
    contentsWrapperTag: WrapperTag,
    contents: contentSamples.test1,
  } as Bar,
};

export const BodySamples = {
  test1: {
    contentsWrapperTag: WrapperTag,
    Bars: [BarSamples.test1],
  } as BookmarkBody,
};

export const JsonSamples = {
  test1: {
    header: BookmarkHeader,
    body: BodySamples.test1,
  },
};
