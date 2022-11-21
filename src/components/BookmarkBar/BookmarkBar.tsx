/** @jsxImportSource @emotion/react */
import { colorCode } from '@/colorCode';
import { css } from '@emotion/react';
import { FC } from 'react';
import { BarProps } from '@/@types/BookmarkTyep';
import Folder from '../Folder/Folder';
import Bookmark from '../Bookmark/Bookmark';

const BarStyles = css`
  background-color: ${colorCode.blue};
  color: white;
  font-size: 28px;
  border-radius: 0.2rem;
`;
const titleStyles = css`
  margin-left: 10px;
`;
const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 10px;
  text-align: justify;
  padding: 0px 0.5rem 0.5rem 0.5rem;
`;

const BookmarkBar: FC<BarProps> = ({
  title,
  add_date,
  last_modified,
  personal_toolbar_folder,
  folders,
  bookmarks,
}) => (
  <div className="BookmarkBar" css={BarStyles}>
    <div css={titleStyles}>{title}</div>
    <div css={gridStyles}>
      {folders?.map((folder) => (
        <Folder
          title={folder.title}
          add_date={folder.add_date}
          last_modified={folder.last_modified}
          bookmarks={folder.bookmarks}
          id="1"
        />
      ))}
      {bookmarks?.map((bookmark) => (
        <Bookmark
          id={bookmark.id}
          title={bookmark.title}
          href={bookmark.href}
          add_date={bookmark.add_date}
          icon={bookmark.icon}
        />
      ))}
    </div>
  </div>
);
export default BookmarkBar;
