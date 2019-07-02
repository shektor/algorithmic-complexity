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
