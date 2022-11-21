/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { colorCode } from '../../colorCode';

export type BookmarkProps = {
  id: string;
  title: string;
  href: string;
  add_date: string;
  icon: string;
};

const Bookmark: FC<BookmarkProps> = ({ id, title, href, add_date, icon }) => {
  const liStyle = css`
    list-style-type: none;
    margin-top: 2px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    padding: 0.25rem 0.5rem;
    background-color: ${colorCode.green};
    border-radius: 0.5rem;
    &:hover {
      background-color: ${colorCode.light_green};
    }
  `;
  const imgStyle = css`
    vertical-align: middle;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
  `;
  return (
    <li className="bookmark" key={id} css={liStyle}>
      <img alt="icon" src={icon} css={imgStyle} />
      {title}
    </li>
  );
};

export default Bookmark;
