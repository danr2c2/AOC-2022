const day = '07';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const input = data.replace(/\r/g, '')
    .trim()
    .split('\n');

console.log(input);

function part1() {
    //do something


}

function part2() {
    //do something


}

part1();
part2();