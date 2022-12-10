const day = '09';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const input = data.replace(/\r/g, '')
    .trim()
    .split('\n');

var num = input.map(x => parseInt(x.split(' ')[1]));
var move = input.map(x => x.split(' ')[0]);
//console.log(move, num);


function part1() {
    //do something
    var map = {'0-0': 'visited'};
    var row = 0;
    var col = 0;
    var tailPos = [row,col];
    var headPos = [row,col];
    var lastPos = [row,col];
    for (var i=0; i<move.length; i++) {
        //console.log(headPos);

        for (var j=0; j<num[i]; j++) {
            lastPos = [row,col];
            if (move[i] == 'U') {
                row++
            } else if (move[i] == 'L') {
                col--;     
            } else if (move[i] == 'D') {
                row--
            } else if (move[i] == 'R') {
                col++
            }
            headPos = [row,col];
            if (Math.abs(headPos[0] - tailPos[0]) > 1 || Math.abs(headPos[1] - tailPos[1]) > 1) {
                map[lastPos[0] + '-' + lastPos[1]] = 'visited';
                tailPos = lastPos;
            }
        }  
    }
    console.log(Object.keys(map).length);
}

function part2() {
    //do something
    rope = 10;
    var map = {};
    for (var knots=0; knots<rope; knots++) {
        map[knots] = [0,0];
    }
    //console.log(map);
    
    var row = 0;
    var col = 0;
    var tailPos = [row,col];
    var headPos = [row,col];
    var visited = ['0,0'];

    //console.log(map, visited);
    for (var i=0; i<move.length; i++) {
        for (var j=0; j<num[i]; j++) {
            //console.log(move[i], num[i]);
            if (move[i] == 'U') {
                row++
            } else if (move[i] == 'L') {
                col--;     
            } else if (move[i] == 'D') {
                row--
            } else if (move[i] == 'R') {
                col++
            }
            map[0] = [row,col];
            for (var k=1; k<rope; k++) { 
                headPos = map[k-1];
                tailPos = map[k];
                if (Math.abs(headPos[0] - tailPos[0]) > 1 || Math.abs(headPos[1] - tailPos[1]) > 1) {
                    var directionY = headPos[0] - tailPos[0];
                    tailPos[0] += Math.abs(directionY) === 2 ? directionY / 2 : directionY;
                    var directionX = headPos[1] - tailPos[1];
                    tailPos[1] += Math.abs(directionX) === 2 ? directionX / 2 : directionX;
                    map[k] = [tailPos[0],tailPos[1]];
                    if (k == rope-1) {
                        visited.push(tailPos[0] + ',' + tailPos[1]);
                        //console.log('Just visited: ' + [tailPos[0] + ',' + tailPos[1]]);
                    }
                }
            }
        }
    }
    var total = new Set(visited);
    console.log(total.size);
}

part1();
part2();