/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { css } from '@emotion/react';
import { colorCode } from '@/colorCode';
import { FolderProps } from '@/@types/BookmarkTyep';
import Bookmark from '../Bookmark/Bookmark';

const Folder: FC<FolderProps> = ({
  id,
  title,
  add_date,
  last_modified,
  contents,
  type,
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

  return (
    <ul className="Folder" key={id} css={ulStyle}>
      <div className="title" css={titleStyle}>
        {title}
      </div>
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
              type={content.type}
            />
          );
        }
        return <div />;
      })}
    </ul>
  );
};

export default Folder;
