import { getBar } from '../getBar';
import { stringToElement } from '../stringToElement';
import { bar } from './assets/assets';
import { BarSamples } from './getTestSample';

describe('getBar', () => {
  test('test1', () => {
    expect(getBar(stringToElement(bar, 'dt'))).toEqual(BarSamples.test1);
  });
});
