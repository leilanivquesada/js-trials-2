'use strict';

function wordsInCommon(words1, words2) {
  // Replace this with your code

  let wordsSet1 = new Set(words1);
  let wordsSet2 = new Set(words2);
  let result = new Set();

  for (const word of wordsSet1) {
    for (const word2 of wordsSet2) {
      if (word === word2) {
        result.add(word);
      }
    }
  }
  let resultList = new Array(result);
  return resultList

}



function kidsGame(names) {
  // Replace this with your code
}
console.log( wordsInCommon(['hey','guys','this','is','awesome'],['hey','you','guys']));
