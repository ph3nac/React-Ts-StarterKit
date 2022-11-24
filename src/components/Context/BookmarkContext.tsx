/* eslint-disable import/prefer-default-export */
import { FC, ReactNode, useMemo, useState } from 'react';
import { createContext } from 'vm';

export const BookmarkContext = createContext([]);

type Props = {
  children: ReactNode | undefined;
};
export const BookmarkContextWrapper: FC<Props> = ({ children }) => {
  const [bars, setBars] = useState([]);
  const BookmarkContextValue = useMemo(
    () => ({
      bars,
      setBars,
    }),
    [bars, setBars],
  );
  return (
    <BookmarkContext.Provider value={BookmarkContextValue}>
      {children}
    </BookmarkContext.Provider>
  );
};
