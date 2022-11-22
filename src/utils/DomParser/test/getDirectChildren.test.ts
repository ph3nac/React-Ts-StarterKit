import { getDirectChildren } from '../getDirectChildren';
import html from './sample.html';

const outputHtmlElement = (text: string): HTMLDListElement => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  return doc.querySelector('dl')!;
};

test('getDirectChildren', () => {
  const body = outputHtmlElement(html);
  const bars = getDirectChildren(body, 'dt');
  const bar = bars[0];
  const barNames = getDirectChildren(bar, 'h3');
  const barBody = getDirectChildren(bar, 'dl')[0];
  const contents = getDirectChildren(barBody, 'dt');

  expect(contents).toBe('');
});
