/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { BarProps, ContentProps } from '@/@types/BookmarkType';
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Folder from '../Folder/Folder';
import { BarStyle } from '../styles/BookmarkStyles';

type T = [
  contentList: ContentProps[],
  setContentList: Dispatch<SetStateAction<ContentProps[]>>,
];

// create context
const BookmarkContext = createContext<T>([[], () => {}]);

const BookmarkBar: FC<BarProps> = ({
  title,
  add_date,
  last_modified,
  personal_toolbar_folder,
  contents,
}) => {
  // define state
  const [contentList, setContentList] = useState<ContentProps[]>([]);

  // state update
  useEffect(() => {
    setContentList(contents!);
  }, [contents]);

  // state memo
  const BookmarkContextValue = useMemo<T>(
    () => [contentList, setContentList],
    [contentList],
  );

  return (
    <BookmarkContext.Provider value={BookmarkContextValue}>
      <div className="BookmarkBar" css={BarStyle.BarStyles}>
        <div css={BarStyle.titleStyles}>{title}</div>
        <div css={BarStyle.gridStyles}>
          {contentList?.map((content) => {
            if (content.type === 'bookmark') {
              return <Bookmark key={content.id} {...content} />;
            }
            if (content.type === 'folder') {
              return <Folder key={content.id} {...content} />;
            }
            return <div />;
          })}
        </div>
      </div>
    </BookmarkContext.Provider>
  );
};
export default BookmarkBar;
