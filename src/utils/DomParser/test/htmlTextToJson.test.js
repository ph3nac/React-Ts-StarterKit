import { htmlTextToJson } from '../htmlTextToJson';
import { sample as html } from './assets/assets';
import { JsonSamples } from './getTestSample';

describe('htmlTextToJson', () => {
  test('test1', () => {
    expect(htmlTextToJson(html)).toEqual(JsonSamples.test1);
  });
});
