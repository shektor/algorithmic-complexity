
function findDuplicates (words) {
  let set = new Set()
  let duplicateSet = new Set()

  let duplicates = []

  words.forEach((word) => {
    if (set.has(word)) {
      if (!duplicateSet.has(word)) {
        duplicateSet.add(word)
        duplicates.push(word)
      }
    } else {
      set.add(word)
    }
  })

  return duplicates
}

module.exports = findDuplicates
