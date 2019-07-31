const findDuplicates = require('../../src/algorithms/findDuplicates')

describe('findDuplicates', () => {
  it('returns all words that appear more than once', () => {
    const words = ['bob', 'fish', 'bob', 'happy', 'days', 'happy', 'bob']
    const duplicateWords = ['bob', 'happy']

    expect(findDuplicates(words)).toEqual(duplicateWords)
  })

  it('returns empty array if there are no duplicate words', () => {
    const words = ['bob', 'happy', 'days']
    const noDuplicates = []

    expect(findDuplicates(words)).toEqual(noDuplicates)
  })
})
