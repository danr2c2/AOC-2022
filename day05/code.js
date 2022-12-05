const day = '05';
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
    .split("\n");

    const map = {
        1:1,
        2:5,
        3:9,
        4:13,
        5:17,
        6:21,
        7:25,
        8:29,
        9:33
    }

    const moves = [];
    input.map(move => {
        if (move.includes('move')) {
            moves.push(move.split(' ').filter(Number));        
        }
        
    })

    function part1() {
        //do something
        var stacks = {};
        for (var key in map) {
            //console.log(map[key]);
            var temp = '';
            input.map(row => {
                if (/[A-Z]/.test(row) && row[map[key]]) {
                    if (row[map[key]] != ' ') {
                        temp += row[map[key]];
                    }
                }
            })
            stacks[key] = temp;
        }
        moves.map(x => {
            console.log(x[0],x[1],x[2]);
            for (var i=0; i<x[0]; i++) {      
                var item = stacks[x[1]].slice(0,1);
                console.log(item);
                stacks[x[1]] = stacks[x[1]].slice(1);
                stacks[x[2]] = item + stacks[x[2]];
            }
            console.log(stacks);
        })
    
        var result = '';
        for (var top in stacks) {
            result += stacks[top][0];
        }
        console.log(result);

    }

    function part2() {
        //do something
        var stacks = {};
        for (var key in map) {
            //console.log(map[key]);
            var temp = '';
            input.map(row => {
                if (/[A-Z]/.test(row) && row[map[key]]) {
                    if (row[map[key]] != ' ') {
                        temp += row[map[key]];
                    }
                }
            })
            stacks[key] = temp;
        }
        
        moves.map(x => {
            console.log(x[0],x[1],x[2]);  
                var item = stacks[x[1]].slice(0,x[0]);
                console.log(item);
                stacks[x[1]] = stacks[x[1]].slice(x[0]);
                stacks[x[2]] = item + stacks[x[2]];
            console.log(stacks);
        })
    
        var result = '';
        for (var top in stacks) {
            result += stacks[top][0];
        }
        console.log(result);


    }

    part1();
    part2();
}