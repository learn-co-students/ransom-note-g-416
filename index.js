// Steps:
/*
  - Clarify the problem:
    - So to clarify, we want to see if we can build a ransom note matching letters
      from the magazine.
    - Is it only letters involved, no special characters, numbers? Yes
    - Do we need to worry about upper or lower cases? Only lower case 
    - What data type should  the return value be? boolean value true or false 
  
  - Solve the problem:
    - So to solve this problem, I'd start with sorting the magazine in asc order
    - Then traverse through magazine, find each letter that's also in our note
    - Count number of occurences of that letter
    - Store the letter as a key in a hash with the value being number of occurences
    - For each letter in note, match letter in hash, if match is equal, subtract 1 from number
    - This will leave us with the remaining number of letters
    - Time complexity: O((n) * O(1) ) + m => O(n)
    
  - Optimize:
    - Start with first letter in note
    - Go through each letter in magazine until last letter in hash reached
    - Move to next letter see if in hash
    - If not keep placing letters from magazine in hash 
    - End: you've successfully gone through each letter in note, and found matching letter

  
  sortedMagazine = magazine.sort 
  histogram = {}
  for letter in magazine 
    if letter in histogram
      histogram[letter] += 1 
    else 
      histogram[letter] = 1 
  
  for letter in note 
    if letter in histogram
      histogram[letter] -= 1
  */

function binaryMatch(magazine) {
  // collect assigns each letter as key, num occurences as value 
  let result = buildHistogram(magazine);
  
  return result;
}

function buildHistogram(magazine) {
  [].concat.apply([], magazine.sort((a, b) => a.localeCompare(b)) );
  const histogram = {};
  for (const letter of magazine) {
    if (letter in histogram) {
      histogram[letter] += 1;
    } else {
      histogram[letter] = 1;
    }
  }
  return histogram;
}


function canBuildNote(magazine, note) {
  // convert note into a hash with letter counts
  let result;
  const noteArray = note.split("");
  // iterate note and subtract from histogram letter count 
  console.log('magazine ', magazine, ' note ', note)
  if (magazine.length >= noteArray.length) {
    
    
    
    const hashNote = buildHistogram(noteArray);
    const magazineHash = buildHistogram(magazine);
    const magazineLetters = Object.keys(magazineHash);
    console.log('hmagazine ', magazineHash, ' hnote ', hashNote)
    console.log('magazineLetters ', magazineLetters)
    for (const letter in hashNote) {
      // if histogram letter count greater or equal to note
      // for each letter than we can create ransom note
   
      // if magazine histogram letter count >= note letter count
     console.log(magazineHash[letter], ' magazineHash[letter] >= hashNote[letter] ', hashNote[letter])
     if (magazineHash[letter] >= hashNote[letter]) {
       let letterIdx = magazineLetters.indexOf(letter);
       if (magazineLetters[letterIdx] === letter) {
         result = true;
       }
     } else {
       result = false;
       break;
     }
    }
    
  }
  return result;
}











