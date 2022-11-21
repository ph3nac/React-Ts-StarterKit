import { BookmarkMock } from './components/Bookmark/BookmarkMock';
import Bookmark from './components/Bookmark/Bookmark';

const App = () => (
  <div className="App">
    <Bookmark {...BookmarkMock} />
  </div>
);
export default App;
