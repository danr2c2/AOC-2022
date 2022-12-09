const day = '08';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const input = data.replace(/\r/g, '')
    .trim()
    .split('\n');

//console.log(input);

function transpose(matrix) {
    newArray = [];
    for (var i=0; i<matrix[0].length; i++) {
        var temp = '';
        for (var j=0; j<matrix.length; j++) {
        temp += input[j][i];
        }
        newArray.push(temp);
    }
    return newArray;
}

var numMap = {};

function isEdge(tree) {
    return (tree.row == 0 || tree.row == input.length-1 || tree.col == 0 || tree.col == input[0].length-1);
}

for (var y=0; y<input.length; y++) {
    for (var x=0; x<input[0].length; x++) {
        numMap[y + '-' + x] = {
            visible: false,
            value: parseInt(input[y][x]),
            row: y,
            col: x,
            edge: false,
            scenicUp: 0,
            scenicLeft: 0,
            scenicDown: 0,
            scenicRight: 0,
            scenicTotal: 0,
        }
        if (isEdge(numMap[y + '-' + x])) {
            numMap[y + '-' + x].edge = true;
        }
    }
}

var leftToRight = input;
var columns = transpose(input);
var topToBottom = columns;

//console.log(left,down);
//console.log(numMap);

function getVisibility(row, reverse) {
    var isVisible = 0;

    // start at top left
    for (var i=0; i<row.length; i++) {
        var line = row[i];
        var lastMax = -1;
        for (var j=0; j<line.length-1; j++) {
            if (line[j] > lastMax) {
                if (reverse) {
                    if (!numMap[j + '-' + i].visible) {
                        isVisible++;
                        numMap[j + '-' + i].visible = true;
                    }
                } else {
                    if (!numMap[i + '-' + j].visible) {
                    isVisible++;
                    numMap[i + '-' + j].visible = true;
                    }
                }
                lastMax = line[j];
            } 
        }
    }
    
    // start at bottom right
    for (var v=row.length-1; v>=0; v--) {
        line = row[v];
        lastMax = -1;
        for (var w=line.length-1; w>=0; w--) {
            if (line[w] > lastMax) {
                if (reverse) {
                    if (!numMap[w + '-' + v].visible) { 
                        isVisible++;
                        numMap[w + '-' + v].visible = true;
                    }
                } else {
                    if (!numMap[v + '-' + w].visible) {
                    isVisible++;
                    numMap[v + '-' + w].visible = true;
                    }
                }
                lastMax = line[w];
            }
        }
    }
    return isVisible;
}

function scenicScore(item) {
    
    var scoreUp = 0;
    var subUp = topToBottom[item.col].slice(0,item.row);
    for (var i=subUp.length-1; i>=0; i--) {
        scoreUp++;
        if (item.value <= subUp[i]) {
            break;
        }
    }
    item.scenicUp = scoreUp;
    console.log(item.row, item.col, subUp);
    
    var scoreLeft = 0;
    var subLeft = leftToRight[item.row].slice(0,item.col);
    for (var i=subLeft.length-1; i>=0; i--) {
        scoreLeft++;
        if (item.value <= subLeft[i]) {   
            break;
        }
    }
    item.scenicLeft = scoreLeft;
    console.log(item.row, item.col, subLeft);

    var scoreDown = 0;
    var subDown = topToBottom[item.col].slice(item.row+1);
    for (var i=0; i<subDown.length; i++) {
        scoreDown++;
        if (item.value <= subDown[i]) { 
            break;
        }
    }
    item.scenicDown = scoreDown;
    console.log(item.row, item.col, subDown);

    var scoreRight = 0;
    var subRight = leftToRight[item.row].slice(item.col+1);
    for (var i=0; i<subRight.length; i++) {
        scoreRight++;
        if (item.value <= subRight[i]) {
            break;
        }
    }
    item.scenicRight = scoreRight;
    console.log(item.row, item.col, subRight);
    

    item.scenicTotal = item.scenicUp*item.scenicDown*item.scenicLeft*item.scenicRight;
    console.log(item);

}


function part1() {
    //do something
    var total = getVisibility(leftToRight, false)+getVisibility(topToBottom, true);
    //console.log(numMap);
    console.log(total);

}


function part2() {
    //do something

    for (var key in numMap) {
        if (numMap[key].visible) {
            scenicScore(numMap[key]);
            //console.log(numMap[key]);
        }
    }

    var scores = [];
    for (var key in numMap) {
        if (numMap[key].scenicTotal > 0) {
            scores.push(numMap[key].scenicTotal);
            //console.log(numMap[key].scenicTotal);
        }
    }

    console.log(Math.max(...scores));

}

part1();
part2();