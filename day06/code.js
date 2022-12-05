const day = '06';
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
    const input = data.replace(/\r/g, '')
    .trim()
    .split('\n');

    function part1() {
        //do something


    }

    function part2() {
        //do something


    }

    part1();
    part2();
}