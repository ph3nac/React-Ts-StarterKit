type BookmarkProps = {
  id: string;
  title: string;
  href: string;
  add_date: string;
  icon: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FolderProps = {
  id: string;
  title: string;
  add_date: string;
  last_modified: string;
  bookmarks?: BookmarkProps[];
};

export type ContentProps = {
  id: string;
  title: string;
  add_date: string;
  type: 'folder' | 'bookmark';
  href?: string;
  icon?: string;
  last_modified?: string;
  contents?: ContentProps[];
};

export type BarProps = {
  title: string;
  add_date: string;
  last_modified: string;
  personal_toolbar_folder: boolean;
  contents?: ContentProps[];
};

export const BookmarkHeader = `
<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
`;

export const WrapperTag = {
  startTag: '<DL><p>',
  endTag: '</DL><p>',
} as const;

export const BookmarkTag = {
  startTag: '<DT>',
  contentTag: '<A>',
  endTag: '</A>',
} as const;

export type Bookmark = {
  tag: typeof BookmarkTag;
  title: string;
  href: string;
  add_date: string;
  icon: string;
};

export const FolderTag = {
  startTag: '<DT>',
  contentTag: '<H3>',
  endTag: '</H3>',
} as const;

export type Folder = {
  tag: typeof FolderTag;
  title: string;
  add_date: string;
  last_modified: string;
  contentsWrapperTag: typeof WrapperTag;
  contents?: Content[];
};

export type Content = Bookmark | Folder;

export type Bar = {
  tag: typeof FolderTag;
  title: string;
  add_date: string;
  last_modified: string;
  personal_toolbar_folder: string;
  contentsWrapperTag: typeof WrapperTag;
  contents?: Content[];
};

export type BookmarkBody = {
  contentsWrapperTag: typeof WrapperTag;
  Bars: Bar[];
};

export type JsonDom = {
  header: typeof BookmarkHeader;
  body: BookmarkBody;
};
