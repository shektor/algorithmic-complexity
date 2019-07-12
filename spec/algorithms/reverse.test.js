const reverse = require('../../src/algorithms/reverse')

describe('reverse', () => {
  it('returns an array with the first element becoming the last and vice versa', () => {
    const array = [1, 2, 3, 4]
    const arrayReversed = [4, 3, 2, 1]

    expect(reverse(array)).toEqual(arrayReversed)
  })
})
