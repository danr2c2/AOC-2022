const day = '04';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const input = data.replace(/\r/g, '')
    .trim()
    .split('\n');

function part1() {
//do something 
pairs = 0;
input.map(function (x) {
    x = x.split(/[,-]/).map(Number);
    var elf1 = x.slice(0,x.length/2);
    var elf2 = x.slice(x.length/2);
    
    if (elf1[0] >= elf2[0] && elf1[1] <= elf2[1] || elf2[0] >= elf1[0] && elf2[1] <= elf1[1]) {
        pairs++;
    }
});
console.log(pairs);

}

function part2() {
//do something
overlap = 0;
input.map(function (x) { 
    x = x.split(/[,-]/).map(Number);
    var elf1 = x.slice(0,x.length/2);
    var elf2 = x.slice(x.length/2);
    
    if(elf1[1] >= elf2[0] && elf1[0] <= elf2[1] || elf2[1] >= elf1[0] && elf2[0] <= elf1[1]) {
        overlap++;
    }
});
console.log(overlap);

}

part1();
part2();