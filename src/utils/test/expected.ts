import {
  BookmarkBody,
  BookmarkHeader,
  JsonDom,
  WrapperTag,
  Bar,
  FolderTag,
  Folder,
  Bookmark,
  BookmarkTag,
  Content,
} from '@/@types/BookmarkTyep';

const bookmark: Bookmark = {
  tag: BookmarkTag,
  title: 'glitch',
  href: 'https://glitch.com/dashboard',
  add_date: '1646478784',
  icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACkklEQVQ4jaWTT2xUZRTFf/d93/s3M30M00IZcQzlP9jEGE101TTRSAguW3euTIwbgiswxoSyImHpxhA2hBVKgu5csIAYE0LSnWkkwVZLYaq0pZ1OmT7mfe+7LOoCo5EFZ3kW5+Tcew68JOS/SP3y0jCubOH1PvODK3Lto/KFAnry64xK0sK7BkZOA2MgC+CnQa5w/rObIqL/MEJF9NOLIXVOYMwpfDnad5Is9dLqn92aJNaRho7UusU0dNfrlfw2ib/DRrCO4U28vC96+pup3PvPv1ub2/be3iPE7Ygbsy1S6zg4tMqTIqTXt2wWhsiU5e5soz1SX+9Gxo8AyxaRySAIsjiOUa9UQocGsGNgk6O7VkABG1EkdZZ6qZldfa3VLRxvDT1CgmBe9NrMWfX+CzGSoJ5e33C7nbGnnrOv0dsSCGPItm/lVnClwQYelGnROxtv4ItPNtaZ2MyDZhDAeiHc+83yeFkIBERUq6lfae329w7tdz9HoSwAY+q1ZuWd6sxoxK1XdvGBEd8MbclgrQd5h6VVy1Nn6fUj/+RpdLdbhN924cdH8Pjdejk/3OBjOYyeE5Of2vn69W21cJyVX7czduB3XGmYW26Q2oI0KoitI3fWtdeyxYdrA93C2z1bR4SJIJAsTj3GO/ouxASw2Klyt7ODpA6SQ2xKBms9u//oaqvZz/nlQRMM9+XDCZ0qC84YS1KWkJqSt19d40EnYcFVqex8rjh/1yiyJa40KEzbbJQfxDGE5xhQVczAH2GjVmQw4Nj6AjiggzAL/OQxCxIybjypAExOqolGaEpAosoxL3wl0AC+F7gF/CXKnE2ZvzxFB0SPn9R4qMLwv8Y0PqW21eewczQVZq5ekPb/jPHl8QzxYRKdsqNOsQAAAABJRU5ErkJggg==',
};

const bookmarks: Bookmark[] = [bookmark];

const folder: Folder = {
  tag: FolderTag,
  title: 'account',
  add_date: '1646478792',
  last_modified: '1668921574',
  contentsWrapperTag: WrapperTag,
  contents: bookmarks,
};

const contents: Content[] = [folder, bookmark];

const bar: Bar = {
  contentsWrapperTag: WrapperTag,
  tag: FolderTag,
  title: 'Bookmarks Bar',
  add_date: '1618827550',
  last_modified: '1668921581',
  personal_toolbar_folder: 'true',
  contents: contents,
};
const bars: Bar[] = [bar];

const bookmarkBody: BookmarkBody = {
  contentsWrapperTag: WrapperTag,
  Bars: bars,
};

export const expected: JsonDom = {
  header: BookmarkHeader,
  body: bookmarkBody,
};
