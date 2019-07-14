const { Benchmark } = require('./src/benchmark')
const reverse = require('./src/algorithms/reverse')
const shuffle = require('./src/algorithms/shuffle')

const benchmark = new Benchmark(50000, 1000000)

console.log(benchmark.test(reverse))
console.log(benchmark.test(shuffle))
