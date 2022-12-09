const day = '07';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const input = data.replace(/\r/g, '')
    .trim()
    .split('\n');
 
//console.log(input);
var dir = {'/': 0};

function part1() {
    //do something
    var temp = [];
    input.map((x) => {
        var cmd = x.split(' ');
        //console.log(cmd);
        if (cmd[0] == '$' && cmd[1] == 'cd' && cmd[2] != '..') {
            temp.push(cmd[2]);
        } else if (cmd[0] == 'dir') {
            dir[temp.join(' ') + ' ' + cmd[1]] = 0;
        } else if (cmd[0] == '$' && cmd[1] && cmd[2] == '..') {
            temp.pop();
        } else if (!(cmd[0] == '$' && cmd[1] == 'ls')) {
            var files = [];
            temp.map((y) => {
                files.push(y);
                dir[files.join(' ')] += parseInt(cmd[0]);
            });
        }
        //console.log(dir);
    });

    console.log(dir);

    var total = 0;
    for (var key in dir) {
        if (dir[key] <= 100000) {
            total += dir[key];
        }
    }
    
    console.log(total);
    
}

function part2() {
    //do something
    var size = 30000000 - (70000000 - dir['/']);
    //console.log(size);
    var freeup = [];
    for (var d in dir) {
        if (dir[d] >= size) {
            freeup.push(dir[d]);
        }
    }

    console.log(freeup, Math.min(...freeup));
}

part1();
part2();