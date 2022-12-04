const day = '01';
const year = '2022';
const fs = require('fs');
fs.readFile('/Users/danny/github/AoC-' + year + '/day' + day + '/input.txt', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
    }
  part1(data);
  part2(data);
});

function part1(data) {
  //do something
  var elves = data.replace(/\r/g, "").trim().split("\n\n");
  
  const calories = elves.map((elf) => {
    const calories = elf.split('\n').map(Number);
    return calories.reduce((previous, current) => previous + current, 0);

  });
    
 console.log(Math.max(...calories));

}

function part2(data) {
  //do something
  var elves = data.replace(/\r/g, "").trim().split("\n\n");

  const calories = elves.map((elf) => {
    const calories = elf.split('\n').map(Number);
    return calories.reduce((previous, current) => previous + current, 0);

  });

  calories.sort((a,b) => b - a);
  console.log(calories.slice(0,3).reduce((previous, current) => previous + current, 0));

}