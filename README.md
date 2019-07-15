# Algorithmic Complexity

The aim is to understand efficiency as one of the dimensions of a good piece of code, using a timing framework to benchmark algorithms.

The framework,
- Returns the time needed to execute a function on an array.
- The framework runs the function multiple times, with the array size increasing each time.
- An example input array could increase in length from 50,000 to 1,000,000 in steps of 50,000.
- Each run outputs the time to the console.

## Getting Started

```bash
> git clone git@github.com:shektor/algorithmic-complexity.git
> cd algorithmic-complexity
> npm install
```

## Running Tests

Unit tests are executed with Jest, including code coverage, with linting performed post-test by ESLint.

```bash
> npm test
```

## Usage

Algorithms can be written as functions and saved as seperate files in the algorithms folder. The function should accept an array as an arguement and return a modified array. The function should be exported as a module at the end of file. 
```javascript
// ./src/algorithms

function myAlgorithm (array) {
  // modify array
  return array
}

module.exports = myAlgorithm
```

Algorithms can be timed using `benchmarkRunner.js` by requiring the module, and passing it to the `Benchmark.test` function.
```javascript
const myAlgorithm = require('./src/algorithms/myAlgorithm')

const benchmark = new Benchmark(50000, 1000000)

console.log(benchmark.test(myAlgorithm))
```

The runner can be executed in the terminal using `node`, with output returned to the console.
```bash
➜ node benchmarkRunner.js
[ [ 50000, 4 ],
  [ 100000, 4 ],
  [ 150000, 3 ],
  [ 200000, 7 ],
  [ 250000, 3 ],
  [ 300000, 9 ],
  [ 350000, 9 ],
  [ 400000, 12 ],
  [ 450000, 10 ],
  [ 500000, 12 ],
  [ 550000, 14 ],
  [ 600000, 16 ],
  [ 650000, 15 ],
  [ 700000, 14 ],
  [ 750000, 15 ],
  [ 800000, 14 ],
  [ 850000, 15 ],
  [ 900000, 21 ],
  [ 950000, 22 ],
  [ 1000000, 21 ] ]
```

The `test` function returns an array, with each element being an array where the first value is the length of the randomised array passed to the algorithm, and the second value the duration in milliseconds.

## Benchmark Documentation

Can be used to time the duration it takes to run an algorithm against a randomised array that increases in length at specified steps.

#### Syntax
```
new Benchmark([lengthIncrease, maxLength])
```
#### Parameters
`lengthIncrease` Optional 
- Integer value representing the increase in length of the array passed to the algorithm being tested after each run. The default is 50000.

`maxLength` Optional
- Integer value representing the max array length the algorithm will be tested against. The default is 1000000.

### Methods

`.test(function)`
- Returns an array with each element composed of an array containing milliseconds taken to run pass function against array length. The method accepts a function that is executed inside the method, with an array passed as an arguement to the function. 
