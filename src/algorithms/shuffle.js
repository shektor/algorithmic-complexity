
function myShuffle (array) {
  let shuffled = array

  for (let i = 0; i < 7; i++) {
    let setA = []
    let setB = []

    shuffled.forEach((element) => {
      if (Math.random() > 0.5) {
        setA.push(element)
      } else {
        setB.push(element)
      }
    })

    shuffled = setA.concat(setB)
  }

  return shuffled
}

module.exports = myShuffle
