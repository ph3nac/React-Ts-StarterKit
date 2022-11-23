import { htmlTextToJson } from '../htmlTextToJson';
import { sample } from './assets/assets';
import { JsonSamples } from './getTestSample';

describe('htmlTextToJson', () => {
  test('test1', () => {
    expect(htmlTextToJson(sample)).toEqual(JsonSamples.test1);
  });
});
