function buildHistogram(mag) {
    let hist = {};
    mag.forEach(letter => {
        if (!!hist[letter]) {
            hist[letter] += 1;
        } else {
            hist[letter] = 1;
        }
    })
    return hist
}

function canBuildNote(mag, note) {
    let magHist = buildHistogram(mag);
    let noteHist = buildHistogram(note.split(''));
    for (let letter in noteHist) {
        if (!magHist[letter] || magHist[letter] < noteHist[letter]) {
            return false;
        }
    }
    return true;
}