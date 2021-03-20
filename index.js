function canBuildNote(mag, note){
    const noteChars = note.split("")
    const hist = {}
    let magIndex = 0
    let histogramComplete = false
    for(let char of noteChars){

        if(hist[char] && hist[char] > 0){
            hist[char] -= 1
        }else{
            if(histogramComplete){
                return false
            }else{
                magIndex = buildHistogramUntil({mag, endChar: char, startIndex: magIndex, hist})
                histogramComplete = (magIndex >= mag.length)
                if(!hist[char] || hist[char] <= 0) return false
                hist[char] -= 1
            }
        }

    }
    return true
}

function buildHistogram(mag){
    const hash = {}
    for(let char of mag){
        !!hash[char] ? hash[char] += 1 : hash[char] = 1
    }
    return hash
}

function buildHistogramUntil({mag, endChar, startIndex, hist}){
    let index = startIndex
    while(index < mag.length){
        const char = mag[index]
        !!hist[char] ? hist[char] += 1 : hist[char] = 1
        index++
        if(char === endChar) break
    }
    return index
}