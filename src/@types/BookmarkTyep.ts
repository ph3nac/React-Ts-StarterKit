export type BookmarkProps = {
  id: string;
  title: string;
  href: string;
  add_date: string;
  icon: string;
};

export type BookmarksProps = {
  id: string;
  title: string;
  add_date: string;
  last_modified: string;
  bookmarks: BookmarkProps[];
};

export type BarProps = {
  title: string;
  add_date: string;
  last_modified: string;
  personal_toolbar_folder: boolean;
  bookmarks_array: BookmarksProps[];
};
