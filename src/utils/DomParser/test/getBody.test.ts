import { getBody } from '../getBody';
import { stringToElement } from '../stringToElement';
import { bar } from './assets/assets';
import { BodySamples } from './getTestSample';

describe('getBody', () => {
  test('test1', () => {
    expect(getBody([stringToElement(bar, 'dt')])).toEqual(BodySamples.test1);
  });
});
