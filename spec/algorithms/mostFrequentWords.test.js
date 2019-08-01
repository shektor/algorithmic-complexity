const mostFrequentWords = require('../../src/algorithms/mostFrequentWords')

describe('mostFrequentWords', () => {
  it('returns two most common words', () => {
    const words = ['bob', 'bob', 'fish', 'happy', 'bob', 'happy']
    const twoMostCommon = ['bob', 'happy']

    expect(mostFrequentWords(words)).toEqual(twoMostCommon)
  })

  it('returns two most common words ordered by most frequent first', () => {
    const words = ['bob', 'bob', 'fish', 'happy', 'bob', 'happy', 'fish', 'fish', 'fish']
    const twoMostCommon = ['fish', 'bob']

    expect(mostFrequentWords(words)).toEqual(twoMostCommon)
  })

  it('returns words in order of appearance if all appear with the same frequency', () => {
    const words = ['bob', 'fish', 'happy', 'days']
    const twoMostCommon = ['bob', 'fish']

    expect(mostFrequentWords(words)).toEqual(twoMostCommon)
  })

  it('returns word if only element in array', () => {
    const words = ['bob']
    const twoMostCommon = ['bob']

    expect(mostFrequentWords(words)).toEqual(twoMostCommon)
  })

  it('returns empty array if passed as arguement', () => {
    const words = []
    const twoMostCommon = []

    expect(mostFrequentWords(words)).toEqual(twoMostCommon)
  })
})
