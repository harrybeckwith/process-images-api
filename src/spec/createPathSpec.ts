import  createPath from '../helpers/createPath'

describe('using the creatPath fnc', () => {

it('expect two paths to join', () => {
  const input = createPath('localhost/', 'src/images/test.jpg')
  expect(input)
  .toBe(`localhost/src/images/test.jpg`)
})

})
