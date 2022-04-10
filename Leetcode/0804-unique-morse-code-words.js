
/*
看到这道题还在想什么，暴力解法一把梭出来先！
至于更好的算法……以后重刷再想吧！
*/

/**
 * @link https://leetcode-cn.com/problems/unique-morse-code-words/
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const morseCode = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
  let wordsInMorseCode = {};
  for (const word of words) {
    let morse = '';
    for (let i = 0;i < word.length;i++) {
      morse += morseCode[word[i].charCodeAt() - 97];
    }
    wordsInMorseCode[morse] = '';
  }
  return Object.keys(wordsInMorseCode).length;
};
