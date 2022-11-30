import { BarProps, ContentProps } from '@/@types/BookmarkType';
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

type T = [
  contents: ContentProps[],
  setContents: Dispatch<SetStateAction<ContentProps[]>>,
];

type WrapperProps = {
  children: ReactNode | undefined;
  bar: BarProps;
};

export const BookmarkContext = createContext<T>([[], () => {}]);

export const BookmarkContextWrapper: FC<WrapperProps> = ({ children, bar }) => {
  const [contents, setContents] = useState<ContentProps[]>([]);
  useEffect(() => {
    setContents(bar.contents!);
  }, [bar.contents]);

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
