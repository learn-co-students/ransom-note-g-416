function buildHistogram(array){
  let hist = {}
  for (const item of array) {
    if (Object.keys(hist).includes(item)) {
      hist[item] = hist[item] + 1;
    } else {
      hist[item] = 1;
    }
  }

  return hist;
}

function canBuildNote(magazine, note){
  const magHist = buildHistogram(magazine);
  const noteHist = buildHistogram(note);

  for (const key in noteHist){
    if (Object.keys(magHist).includes(key) && magHist[key] >= noteHist[key]){

    } else {
      return false;
    }
  }

  return true;
}
