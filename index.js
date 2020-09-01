function buildHistogram(magazine){
  let sortedMagazine = magazine.sort();
  let magazineHistorgram = {};
  sortedMagazine.forEach( (letter) => {
    if(letter in magazineHistorgram ){
      magazineHistorgram[letter]++;
    }else{
      magazineHistorgram[letter] = 1;
    }
  })
  
  return magazineHistorgram
}

function canBuildNote(magazine, note){
  let magazineHistorgram = buildHistogram(magazine);
  let noteArray = note.split("")
  let canBuild = true;
  noteArray.forEach( (letter) => {
    if(letter in magazineHistorgram && magazineHistorgram[letter]> 0){
      magazineHistorgram[letter]--
    }else{
      canBuild = false;
      return canBuild;
    }
  })
  return canBuild;
}