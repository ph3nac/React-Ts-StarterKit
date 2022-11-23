import { getBody } from '../getBody';
import { stringToElement } from '../stringToElement';
import { bar } from './assets/assets';
import { BodySample } from './getTestSample';

describe('getBody', () => {
  test('test1', () => {
    expect(getBody([stringToElement(bar, 'dt')])).toEqual(BodySample.test1);
  });
});
