import { CustomerNameFilterPipe } from './customer-name-filter.pipe';

describe('CustomerNameFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomerNameFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
