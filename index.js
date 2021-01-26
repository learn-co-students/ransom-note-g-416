function buildHistogram(array) {
    let histogram = {}
    for (let i =0; i < array.length; i++) {
        if (histogram[array[i]]) {
            histogram[array[i]]++
        } else {
            histogram[array[i]] = 1
        }
    }
    return histogram
}

function canBuildNote(magazine, note) {
    let magazineHist = buildHistogram(magazine);
    let noteArray = note.split('');
    let noteHist = buildHistogram(noteArray);
    let noteKeys = Object.keys(noteHist);
    console.log(magazineHist)
    console.log(noteHist)
    console.log(noteKeys)
    for (let i = 0; i < noteKeys.length; i ++) {
        if (noteHist[noteKeys[i]] > magazineHist[noteKeys[i]] || magazineHist[noteKeys[i]] === undefined) {
            return false;
        }
    }
    return true
}