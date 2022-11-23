import { getContents } from '../getContents';
import { barBody } from './assets/assets';
import { contentSamples } from './getTestSample';
import { stringToElement } from '../stringToElement';

describe('getContents', () => {
  test('test1', () => {
    expect(getContents(stringToElement(barBody, 'dl'))).toEqual(
      contentSamples.test1,
    );
  });
});
