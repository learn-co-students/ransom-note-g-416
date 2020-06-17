function buildHistogram(array){
    let hash = {}
    array.forEach(element=>{
        if (hash[element]){
            hash[element] += 1
        } else{
            hash[element] = 1
        }
    })
    return hash
}

function canBuildNote(magazine, note){
    let magazineHistogram = buildHistogram(magazine)
    let noteArray = note.split('')
    let possible = true
    for(let letter of noteArray){
        if (magazineHistogram[letter] > 0){
            magazineHistogram[letter] -= 1
        }else{
            possible = false
        }
    }
    return possible
}