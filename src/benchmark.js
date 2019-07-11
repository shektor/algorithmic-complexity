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
}

module.exports = {
  Benchmark
}
