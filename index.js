function buildHistogram(array){
    let result = {}
    let occurrences
    for(let i=0; i < array.length; i++){
        let currentNum = array[i]
        let hashVal = result[currentNum]
        if (hashVal != undefined){
            occurrences = hashVal
        } else {
            occurrences = 0
        }
        result[array[i]] = occurrences + 1
    }
    return result
}

function canBuildNote(magazine, note){
    let histogram = buildHistogram(magazine) 
    for (let i=0; i < note.length; i++){
        let letter = note[i]
        if (histogram[letter] == undefined || histogram[letter] < 1){
            return false
        }
        else {
            histogram[letter] = histogram[letter] - 1
        }
    }
    return true
}