const buildHistogram = magazine => {
	let histogram = {}
	magazine.forEach(char => {
		histogram[char] = histogram[char] ? histogram[char] + 1 : 1
	});
	return histogram
}

const canBuildNote = (magazine, note) => {
  let magazineHistogram = buildHistogram(magazine)
  let canBuild = true
  for (let i = 0; i < note.length; i++) {
		if(!!!magazineHistogram[note[i]]) {
      canBuild = false
      i = note.length
    }
    magazineHistogram[note[i]]--
	}
  return canBuild
}
