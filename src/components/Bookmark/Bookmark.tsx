/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { BookmarkProps } from '@/@types/BookmarkType';
import { FC } from 'react';
import { BookmarkStyle } from '../styles/BookmarkStyles';

const Bookmark: FC<BookmarkProps> = ({
  id,
  title,
  href,
  add_date,
  icon,
  type,
}) => (
  <li className="bookmark" key={id} css={BookmarkStyle.liStyle}>
    <img alt="icon" src={icon} css={BookmarkStyle.imgStyle} />
    {title}
  </li>
);

export default Bookmark;
