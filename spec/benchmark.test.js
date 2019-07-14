const { Benchmark } = require('../src/benchmark')

describe('Benchmark', () => {
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

  describe('#generateArray', () => {
    test('it fills array of given size with random numbers', () => {
      jest
        .spyOn(global.Math, 'random')
        .mockImplementation(() => 1)

      const benchmark = new Benchmark()
      const size = 3

      const returnArray = benchmark.generateArray(size)

      expect(returnArray).toEqual([100, 100, 100])
    })
  })

  describe('#test', () => {
    test('it returns array with algorithm time taken to execute on increasing array sizes', () => {
      jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() => new Date('2019-07-02T20:03:50.895Z').valueOf())

      const stepIncrease = 50000
      const stepMax = 1000000
      const benchmark = new Benchmark(stepIncrease, stepMax)

      jest
        .spyOn(benchmark, 'generateArray')
        .mockImplementation(() => [1])

      const aFunction = (array) => { return array }

      const returnArray = [
        [ 50000, 0 ],
        [ 100000, 0 ],
        [ 150000, 0 ],
        [ 200000, 0 ],
        [ 250000, 0 ],
        [ 300000, 0 ],
        [ 350000, 0 ],
        [ 400000, 0 ],
        [ 450000, 0 ],
        [ 500000, 0 ],
        [ 550000, 0 ],
        [ 600000, 0 ],
        [ 650000, 0 ],
        [ 700000, 0 ],
        [ 750000, 0 ],
        [ 800000, 0 ],
        [ 850000, 0 ],
        [ 900000, 0 ],
        [ 950000, 0 ],
        [ 1000000, 0 ]
      ]

      expect(benchmark.test(aFunction)).toEqual(returnArray)
    })
  })
})
