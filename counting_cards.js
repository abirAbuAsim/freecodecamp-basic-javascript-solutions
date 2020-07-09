/**
 * Problem URL: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards
 * Problem Name: Counting Cards
 * Status: Passed
 */

var count = 0;
var plusCountArray = [2, 3, 4, 5, 6];
var zeroCountArray = [7, 8, 9];
var minusCountArray = [10, 'J', 'Q', 'K', 'A'];

function cc(card) {
  var betOrHold = '';
  // Only change code below this line
  if(plusCountArray.includes(card)) {
    count++;
  } else if (zeroCountArray.includes(card)) {
    count = count
  } else if (minusCountArray.includes(card)) {
    count--;
  }

  if(count > 0) {
    betOrHold = 'Bet';
  } else {
    betOrHold = 'Hold';
  }

  return count+" "+betOrHold;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
