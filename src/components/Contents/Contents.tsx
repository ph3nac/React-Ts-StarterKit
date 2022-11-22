import { ContentProps } from '@/@types/BookmarkTyep';
import { FC } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Folder from '../Folder/Folder';

const Contents: FC<ContentProps[]> = ([...contents]) => (
  <div>
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
  </div>
);

export default Contents;
