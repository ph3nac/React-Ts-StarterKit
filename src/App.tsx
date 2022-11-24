/* eslint-disable react/jsx-props-no-spreading */
import { BookmarkBarMock } from './components/BookmarkBar/BookmarkBarMock';
import BookmarkBar from './components/BookmarkBar/BookmarkBar';
import { BookmarkContextWrapper } from './components/Context/BookmarkContext';

const App = () => (
  <div className="App">
    <BookmarkContextWrapper>
      <BookmarkBar {...BookmarkBarMock} />
    </BookmarkContextWrapper>
  </div>
);
export default App;
