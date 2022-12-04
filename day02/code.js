const day = '02';
const year = '2022';
const fs = require('fs');
fs.readFile('/Users/danny/github/AoC-' + year + '/day' + day + '/input.txt', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
    }
    processData(data);
});

function processData(data) {
    const input = data.replace(/\r/g, "")
    .trim()
    .split("\n")
    .map((data) => data.split(" "));

    //console.log(input);

    var moves = {
        rock: 1,
        paper: 2,
        sciss: 3
    }

   var mapInput = {
    A: moves.rock,
    B: moves.paper,
    C: moves.sciss,
    X: moves.rock,
    Y: moves.paper,
    Z: moves.sciss
   }

   function score(them, us) {
    if (them === us) {
        return us + 3;
    }
    if (
        (them === moves.rock && us === moves.paper) ||
        (them === moves.paper && us === moves.sciss) ||
        (them === moves.sciss && us === moves.rock)
    ) {
        return us + 6;
    }
    return us;
   }

   function part1() {
        const outcomes = input.map((input) => {
            const them = mapInput[input[0]];
            const us = mapInput[input[1]];
            return score(them, us);
        });
        console.log(outcomes.reduce((a,b) => a + b, 0));
   }

   const solution = {
    A: {
      //rock
      X: moves.sciss, //lose
      Y: moves.rock, //draw
      Z: moves.paper, //win
    },
    B: {
      //paper
      X: moves.rock,
      Y: moves.paper,
      Z: moves.sciss,
    },
    C: {
      //scissors
      X: moves.paper,
      Y: moves.sciss,
      Z: moves.rock,
    },
  };

   function part2() {
    //do something
    const outcomes = input.map((input) => {
        const them = mapInput[input[0]];
        const us = solution[input[0]][input[1]];

        return score(them, us);
    });
    console.log(outcomes.reduce((a,b) => a + b, 0));

   }
   
   
  part1();
  part2();
}