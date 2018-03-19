$(function() {
  var userInputSentence = prompt("Please enter a sentence(no special characters):");
  var firstCharacter = userInputSentence.charAt(0).toUpperCase();
  var lastCharacter = userInputSentence.charAt(userInputSentence.length-1).toUpperCase();
  var combineRevResult = function combineReverse(firstCharacter, lastCharacter) {
    return lastCharacter + firstCharacter;
  }
  alert(combineRevResult);
});
