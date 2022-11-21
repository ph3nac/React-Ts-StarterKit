/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { css } from '@emotion/react';
import { colorCode } from '@/colorCode';
import Bookmark from '../Bookmark/Bookmark';
import { BookmarksProps } from '../../@types/BookmarkTyep';

const Bookmarks: FC<BookmarksProps> = ({
  id,
  title,
  add_date,
  last_modified,
  bookmarks,
}) => {
  const ulStyle = css`
    margin: 0;
    padding: 0;
    border-radius: 0.5rem;
    list-style: none;
    background-color: ${colorCode.dark_green};
  `;
  const titleStyle = css`
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding-top: 2.5px;
    text-align: center;
    &:hover {
    }
  `;
  const liStyle = css`
    padding: 0px 0.5rem 0.5rem 0.5rem;
  `;

  return (
    <ul className="Bookmarks" key={id} css={ulStyle}>
      <div className="title" css={titleStyle}>
        {title}
      </div>

      <div className="Bookmark" css={liStyle}>
        {bookmarks.map((bookmark) => (
          <Bookmark
            id={bookmark.id}
            title={bookmark.title}
            href={bookmark.href}
            add_date={bookmark.add_date}
            icon={bookmark.icon}
          />
        ))}
      </div>
    </ul>
  );
};

export default Bookmarks;
