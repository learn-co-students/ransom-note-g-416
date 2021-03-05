function buildHistogram(array) {
  let result = [];
  let occurences;
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let hashVal = result[currentNum];
    if (hashVal != undefined) {
      occurences = hashVal
    } else {
      occurences = 0
    }
    result[array[i]] = occurences + 1
  }
  return result;
}

function canBuildNote(magazine, note) {
  let histogram = buildHistogram(magazine);
  for (let i = 0; i < note.length; i++) {
    let ransom = note[i];
    if (histogram[ransom] == undefined || histogram[ransom] < 1) {
      return false;
    } else {
      histogram[ransom] = histogram[ransom] - 1
    }
  }
  return true;
}
