/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { colorCode } from '@/colorCode';
import { css } from '@emotion/react';
import { FC } from 'react';
import { BarProps } from '@/@types/BookmarkTyep';
import Bookmark from '../Bookmark/Bookmark';
import Folder from '../Folder/Folder';

const BarStyles = css`
  background-color: ${colorCode.blue};
  color: white;
  font-size: 28px;
  border-radius: 0.2rem;
  margin: 20px;
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
  contents,
}) => (
  <div className="BookmarkBar" css={BarStyles}>
    <div css={titleStyles}>{title}</div>
    <div css={gridStyles}>
      {contents?.map((content) => {
        if (content.type === 'bookmark') {
          return (
            <Bookmark
              id={content.id}
              title={content.title}
              href={content.href}
              add_date={content.add_date}
              icon={content.icon}
              type={content.type}
            />
          );
        }
        if (content.type === 'folder') {
          return (
            <Folder
              id={content.id}
              title={content.title}
              add_date={content.add_date}
              last_modified={content.last_modified}
              contents={content.contents}
              type={content.type}
            />
          );
        }
        return <div />;
      })}
    </div>
  </div>
);
export default BookmarkBar;
