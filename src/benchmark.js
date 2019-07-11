class Benchmark {
  timeNow () {
    return new Date(Date.now())
  }

  durationBetween (startTime, endTime) {
    return endTime - startTime
  }

  timeThis (fn, array) {
    const startTime = this.timeNow()
    fn(array)
    const endTime = this.timeNow()
    const duration = this.durationBetween(startTime, endTime)

    return duration
  }

  generateArray (size) {
    const array = Array(size).fill().map(() => Math.round(Math.random() * 100))

    return array
  }

  test (fn) {
    let runTimes = []

    for (let size = 50000; size <= 1000000; size = size + 50000) {
      const array = this.generateArray(size)
      const time = this.timeThis(fn, array)

      runTimes.push([size, time])
    }

    return runTimes
  }
}

module.exports = {
  Benchmark
}
