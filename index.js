function buildHistogram(array){
  let hash = {}
  array.forEach(el => {
    if (hash[el]){
      hash[el] += 1
    }
    else{
      hash[el] = 1
    }
  })
  return hash
}

function canBuildNote(magazine, note){
  let magazineHistorgram = buildHistogram(magazine)
  let noteArray = note.split('')
  let possible = true
  for(let letter of noteArray){
    if (magazineHistorgram[letter] > 0){
      magazineHistorgram[letter] -= 1
    }
    else {
      possible = false
    }
  }
  return possible
}
