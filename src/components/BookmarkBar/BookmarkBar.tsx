/** @jsxImportSource @emotion/react */
import { colorCode } from '@/colorCode';
import { css } from '@emotion/react';
import { FC } from 'react';
import { BarProps } from '@/@types/BookmarkTyep';
import Bookmarks from '../Bookmarks/Bookmarks';

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
  bookmarks_array,
}) => (
  <div className="BookmarksBar" css={BarStyles}>
    <div css={titleStyles}>{title}</div>
    <div css={gridStyles}>
      {bookmarks_array.map((bookmarks) => (
        <Bookmarks
          title={bookmarks.title}
          add_date={bookmarks.add_date}
          last_modified={bookmarks.last_modified}
          bookmarks={bookmarks.bookmarks}
          id="1"
        />
      ))}
    </div>
  </div>
);
export default BookmarkBar;
