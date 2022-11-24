/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { BookmarkProps } from '@/@types/BookmarkTyep';
import { colorCode } from '@/components/styles/colorCode';
import { css } from '@emotion/react';
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
