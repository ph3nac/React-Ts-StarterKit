/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/prefer-default-export */
import { ContentProps } from '@/@types/BookmarkTyep';
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

// type T = {
//   contents: ContentProps[];
//   setContents: Dispatch<SetStateAction<ContentProps[]>>;
// };

type T = [
  contents: ContentProps[],
  setContents: Dispatch<SetStateAction<ContentProps[]>>,
];
export const BookmarkContext = createContext<T>([[], () => {}]);

type Props = {
  children: ReactNode | undefined;
};
export const BookmarkContextWrapper: FC<Props> = ({ children }) => {
  const [contents, setContents] = useState<ContentProps[]>([]);
  const BookmarkContextValue = useMemo<T>(
    () => [contents, setContents],
    [contents],
  );
  return (
    <BookmarkContext.Provider value={BookmarkContextValue}>
      {children}
    </BookmarkContext.Provider>
  );
};
