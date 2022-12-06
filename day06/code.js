const day = '06';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const input = data.replace(/\r/g, '')
    .trim()
    .split('\n');

function hasRepeats (str) {
    return /(.).*\1/.test(str);
}

function findIt (n) {
    input.map(line => {
        for (var i=0; i<line.length; i++) {
            var test = line.substring([i], [i+n]);
            if (!hasRepeats(test)) {
                console.log(test);
                console.log([i+n]);
                break;
            }
        }
    })
}

function part1() {
    //do something
    findIt(4);
}

function part2() {
    //do something
    findIt(14);

}

part1();
part2();
