const { Benchmark } = require('../src/benchmark')

describe('#timeNow', () => {
  test('it returns current time', () => {
    jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() => new Date('2019-07-02T20:03:50.895Z').valueOf())

    const benchmark = new Benchmark()

    expect(benchmark.timeNow()).toEqual(new Date('2019-07-02T20:03:50.895Z'))
  })
})

describe('#durationBetween', () => {
  test('it returns time in milliseconds between two date objects', () => {
    const startTime = new Date('2019-07-02T22:20:34.920Z')
    const endTime = new Date('2019-07-02T22:20:42.533Z')

    const benchmark = new Benchmark()

    expect(benchmark.durationBetween(startTime, endTime)).toBe(7613)
  })
})

describe('#timeThis', () => {
  test('it runs passed function', () => {
    const benchmark = new Benchmark()
    const testFunction = jest.fn().mockImplementation((array) => { return array })
    const array = [1]

    benchmark.timeThis(testFunction, array)

    expect(testFunction).toHaveBeenCalledWith(array)
  })

  test('it returns time taken to run passed function', () => {
    jest
      .spyOn(global.Date, 'now')
      .mockImplementation(() => new Date('2019-07-02T20:03:50.895Z').valueOf())

    const benchmark = new Benchmark()
    const testFunction = (array) => { return array }
    const array = [1]

    expect(benchmark.timeThis(testFunction, array)).toBe(0)
  })
})
