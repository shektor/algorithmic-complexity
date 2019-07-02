class Benchmark {
  timeNow () {
    return new Date(Date.now())
  }

  durationBetween (startTime, endTime) {
    return endTime - startTime
  }
}

module.exports = {
  Benchmark
}
