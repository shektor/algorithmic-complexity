
function mostFrequentWords (words) {
  let wordFrequency = {}

  words.forEach((word) => {
    if (wordFrequency[word] === undefined) {
      wordFrequency[word] = 1
    } else {
      wordFrequency[word] = wordFrequency[word] + 1
    }
  })

  let mostFrequentValue = [0, 0]
  let mostFrequentWords = []

  for (let [key, value] of Object.entries(wordFrequency)) {
    if (value > mostFrequentValue[0]) {
      mostFrequentValue.pop()
      removeFrequentWord(mostFrequentWords)

      mostFrequentValue.unshift(value)
      mostFrequentWords.unshift(key)
    } else if (value > mostFrequentValue[1]) {
      mostFrequentValue.pop()
      removeFrequentWord(mostFrequentWords)

      mostFrequentValue.push(value)
      mostFrequentWords.push(key)
    }
  }

  return mostFrequentWords
}

function removeFrequentWord (words) {
  if (words.length < 2) {
    return words
  } else {
    words.pop()
  }
}

module.exports = mostFrequentWords
