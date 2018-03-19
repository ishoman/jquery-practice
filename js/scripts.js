$(function() {
  var userInputSentence = prompt("Please enter a sentence (no special characters):");
    console.log(userInputSentence);
  var firstLastCharacter = userInputSentence.charAt(0).toUpperCase() + userInputSentence.charAt(userInputSentence.length-1).toUpperCase();
  var combineResult = function combine(firstLastCharacterCombine) {
    return firstLastCharacterCombine
  };
  var combineReverse = function reverse(firstLastCharacterReverse) {
    return firstLastCharacterReverse.charAt(firstLastCharacterReverse.length-1)+firstLastCharacterReverse.charAt(0);
    console.log(combineReverse);
  };

  var combineInputReverse = function inputReverse(userInputSentence, firstLastCharacterReverse) {
    return userInputSentence + firstLastCharacterReverse.charAt(firstLastCharacterReverse.length-1)+firstLastCharacterReverse.charAt(0);
    console.log(combineInputReverse);
  };

  var combineInputReverseDivide = function inputReverseDivide(userInputSentence, firstLastCharacterReverse) {
    return userInputSentence.charAt(Math.floor(userInputSentence.length/2)) + userInputSentence + firstLastCharacterReverse.charAt(firstLastCharacterReverse.length-1)+firstLastCharacterReverse.charAt(0);
    console.log(combineInputReverseDivide)
  };

  $(".walrus img").click(function(){
    alert(userInputSentence);
    console.log(userInputSentence);
  });

  $(".smoking-walrus img").click(function(){
    alert(combineInputReverseDivide(userInputSentence,firstLastCharacter));
    console.log(combineInputReverseDivide(userInputSentence,firstLastCharacter));
  });
});
