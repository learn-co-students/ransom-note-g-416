function buildHistogram(magazine) {
    let histogramHash = {}

    for (const letter of magazine) {
        if (!!histogramHash[letter]) {
            histogramHash[letter] += 1 
        } else {
            histogramHash[letter] = 1 
        }
    }
    return histogramHash
}

function canBuildNote(magazine, note) {
    let histogram = buildHistogram(magazine)

    for (const letter of note) {
        if (!!histogram[letter]) {
            histogram[letter] -= 1 
        } else {
            return false 
        }
    }
    return true 
}