const day = '03';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const input = data.replace(/\r/g, '')
    .trim()
    .split('\n');
  
var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var map = {}; 
for (var key in alpha) {
    map[alpha[key]] = key++ +1;
}

function total(list) {
  var total = 0;
  return list.map(n => total += map[n]).pop();
}

function part1() {
  //do something 
  var result = [];
  for (var i in input) {
    var comp1 = input[i].slice(0, input[i].length/2);
    var comp2 = input[i].slice(input[i].length/2);
    result.push(comp1.split('').filter(x => comp2.includes(x))[0]);
  }
  console.log(total(result));

}

function part2() {
//do something
var result = [];
for (var j=0; j<input.length; j += 3) {
    result.push(input[j].split('').filter(x => input[j+1].includes(x) && input[j+2].includes(x))[0]);
}
console.log(total(result));

}
  
part1();
part2();