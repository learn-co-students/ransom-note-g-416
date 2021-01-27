function buildHistogram(magazine) {
    let histogram = {}
    for (const char of magazine) {
        let collect = magazine.filter(character => character === char)
        if (collect.length !== 0) {
            histogram[char] = collect.length
        }
    }
    return histogram
}

function canBuildNote(magazine, note) {
    let histogram = buildHistogram(magazine)
    let chars = note.split("")
    for (let i = 0; i<chars.length; i++) {
        if (!!histogram[chars[i]] && histogram[chars[i]] !== 0) {
            histogram[chars[i]] -= 1
        }
        else {
            return false
        }
    }
    return true
}