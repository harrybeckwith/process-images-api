import  arrays from '../utilties/arrays'

it('expect two arrays to concat', () => {
  expect(arrays.concatArr([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
});

