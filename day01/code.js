const day = '01';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const input = data.replace(/\r/g, '')
    .trim()
    .split('\n\n');

function part1() {
  //do something
  var elves = input;
  
  const calories = elves.map((elf) => {
    const calories = elf.split('\n').map(Number);
    return calories.reduce((previous, current) => previous + current, 0);

  });
    
 console.log(Math.max(...calories));

}

function part2() {
  //do something
  var elves = input;

  const calories = elves.map((elf) => {
    const calories = elf.split('\n').map(Number);
    return calories.reduce((previous, current) => previous + current, 0);

  });

  calories.sort((a,b) => b - a);
  console.log(calories.slice(0,3).reduce((previous, current) => previous + current, 0));

}

part1();
part2();