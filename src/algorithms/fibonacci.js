
function fibonacci (length) {
  if (length === 0) {
    return []
  } else if (length === 1) {
    return [0]
  }

  const seedSequence = [0, 1]

  const sequence = recursion(seedSequence, length - 1)

  return sequence
}

function recursion (sequence, counter) {
  counter = counter - 1

  if (counter <= 0) {
    return sequence
  }

  const lastSequenceIndex = sequence.length - 1
  const lastSequenceNumber = sequence[lastSequenceIndex]

  const secondLastSequenceIndex = sequence.length - 2
  const secondLastSequenceNumber = sequence[secondLastSequenceIndex]

  const nextNumber = lastSequenceNumber + secondLastSequenceNumber

  sequence.push(nextNumber)

  return recursion(sequence, counter)
}

module.exports = fibonacci
