import  createImage from '../helpers/createImage'

describe('using the creatPath fnc', () => {

  it('expect create image to return correct image', () => {
    const input = createImage('/src/images/test.jpg', 200, 400)
    console.log(input)
    expect(input)
    .toBe(`<img src="/src/images/test.jpg" width=200 height=400>`)
  })

  it('expect create image width arg to convert to number', () => {
    expect(createImage('/src/images/test.jpg', '200', 400))
    .toBe('<img src="/src/images/test.jpg" width=200 height=400>')
  })

})

