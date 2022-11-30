/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { FolderProps } from '@/@types/BookmarkType';
import Bookmark from '../Bookmark/Bookmark';
import { FolderStyle } from '../styles/BookmarkStyles';

const Folder: FC<FolderProps> = ({
  id,
  title,
  add_date,
  last_modified,
  contents,
  type,
}) => (
  <ul className="Folder" key={id} css={FolderStyle.ulStyle}>
    <div className="title" css={FolderStyle.titleStyle}>
      {title}
    </div>
    {contents?.map((content) => {
      if (content.type === 'bookmark') {
        return <Bookmark {...content} />;
      }
      if (content.type === 'folder') {
        return <Folder {...content} />;
      }
      return <div />;
    })}
  </ul>
);
export default Folder;
