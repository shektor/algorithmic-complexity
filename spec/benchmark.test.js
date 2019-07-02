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
