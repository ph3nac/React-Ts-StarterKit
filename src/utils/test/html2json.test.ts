import html2json from '../htmlText2json';
import html from './sample.html';

test('test1', () => {
  expect(html2json(html)).toBe({});
});
