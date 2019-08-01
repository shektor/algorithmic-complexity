const fibonacci = require('../../src/algorithms/fibonacci')

describe('fibonacci', () => {
  it('returns an array of the first N numbers in the fibonacci sequence', () => {
    const firstN = 10
    const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

    expect(fibonacci(firstN)).toEqual(sequence)
  })

  it('returns seed of fibonacci sequence if passed 2', () => {
    const firstN = 2
    const sequence = [0, 1]

    expect(fibonacci(firstN)).toEqual(sequence)
  })

  it('returns an array with the first number in sequence if passed 1', () => {
    const firstN = 1
    const sequence = [0]

    expect(fibonacci(firstN)).toEqual(sequence)
  })

  it('returns an empty array if passed 0', () => {
    const firstN = 0
    const sequence = []

    expect(fibonacci(firstN)).toEqual(sequence)
  })
})
