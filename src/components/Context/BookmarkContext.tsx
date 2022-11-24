/* eslint-disable import/prefer-default-export */
import { FC, useMemo, useState } from 'react';
import { createContext } from 'vm';

export const BookmarkContext = createContext([]);

export const StoreBarsWrapper: FC<Element> = (props) => {
  const [bars, setBars] = useState([]);
  const { children } = props;
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
