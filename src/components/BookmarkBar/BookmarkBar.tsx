/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { BarProps } from '@/@types/BookmarkTyep';
import Bookmark from '../Bookmark/Bookmark';
import Folder from '../Folder/Folder';
import { BarStyle } from '../styles/BookmarkStyles';

const BookmarkBar: FC<BarProps> = ({
  title,
  add_date,
  last_modified,
  personal_toolbar_folder,
  contents,
}) => (
  <div className="BookmarkBar" css={BarStyle.BarStyles}>
    <div css={BarStyle.titleStyles}>{title}</div>
    <div css={BarStyle.gridStyles}>
      {contents?.map((content) => {
        if (content.type === 'bookmark') {
          return <Bookmark {...content} />;
        }
        if (content.type === 'folder') {
          return <Folder {...content} />;
        }
        return <div />;
      })}
    </div>
  </div>
);
export default BookmarkBar;
