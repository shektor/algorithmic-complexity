const shuffle = require('../../src/algorithms/shuffle')

describe('shuffle', () => {
  it('returns an array with elements of passed array shuffled', () => {
    let counter = 0

    const notRandom = () => {
      counter = counter + 1
      if (counter % 2 === 0) {
        return 0
      } else {
        return 1
      }
    }

    jest
      .spyOn(global.Math, 'random')
      .mockImplementation(notRandom)

    const array = [1, 2, 3, 4]
    const shuffledArray = [1, 3, 2, 4]

    expect(shuffle(array)).toEqual(shuffledArray)
  })
})
