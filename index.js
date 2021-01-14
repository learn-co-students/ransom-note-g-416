const buildHistogram = (magazine) => {
  let magHist = {}

  magazine.forEach(letter => {
    if (magHist[letter]) {
      magHist[letter] +=1
    } else {
      magHist[letter] = 1
    }
  })
  return magHist
}


const canBuildNote = (magazine, note) => {
  let magazineHist = buildHistogram(magazine)
  const noteArr = note.split("")
  let noteHist = buildHistogram(noteArr)

  for (let letter of noteArr) {
    if (magazineHist[letter] > 0) {
      magazineHist[letter] -= 1

    } else {

      return false
    }
  }

  return true
}