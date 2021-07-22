import  createPath from '../helpers/createPath'

it('expect two paths to join', () => {
  const input = createPath('localhost/', 'src/images/test.jpg')
  expect(input)
  .toBe(`localhost/src/images/test.jpg`)
});
