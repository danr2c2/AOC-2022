const day = '09';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const input = data.replace(/\r/g, '')
    .trim()
    .split('\n');

    var rope = [
        {'x':0, 'y':0},
        {'x':0, 'y':0},
        {'x':0, 'y':0},
        {'x':0, 'y':0},
        {'x':0, 'y':0},
        {'x':0, 'y':0},
        {'x':0, 'y':0},
        {'x':0, 'y':0},
        {'x':0, 'y':0},
        {'x':0, 'y':0},
    ];
    var compass = {
        'R': {'axis': 'x', 'move': 1},
        'L': {'axis': 'x', 'move': -1},
        'U': {'axis': 'y', 'move': 1},
        'D': {'axis': 'y', 'move': -1}
    }
    var touched = ['0.0'];
    
    var input_array = input;
    input_array.forEach((row) =>{
        let instruction = row.split(' ');
        
        for (var i = 0; i < parseInt(instruction[1]); i++){
            rope[0][compass[instruction[0]].axis] += compass[instruction[0]].move;
    
            for (var knot = 0; knot < 9; knot++ ){
                if (rope[knot].y == rope[knot+1].y && rope[knot].x - rope[knot+1].x == 2) rope[knot+1].x += 1; // right
                else if (rope[knot].y == rope[knot+1].y && rope[knot].x - rope[knot+1].x == -2) rope[knot+1].x -= 1; // left
                else if (rope[knot].x == rope[knot+1].x && rope[knot].y - rope[knot+1].y == 2) rope[knot+1].y += 1; // up
                else if (rope[knot].x == rope[knot+1].x && rope[knot].y - rope[knot+1].y == -2) rope[knot+1].y -= 1; // down
                else if ((Math.abs(rope[knot].x - rope[knot+1].x) == 2 || Math.abs(rope[knot].y - rope[knot+1].y) == 2) && rope[knot].x > rope[knot+1].x && rope[knot].y > rope[knot+1].y) {rope[knot+1].x += 1; rope[knot+1].y += 1} //up+right
                else if ((Math.abs(rope[knot].x - rope[knot+1].x) == 2 || Math.abs(rope[knot].y - rope[knot+1].y) == 2) && rope[knot].x > rope[knot+1].x && rope[knot].y < rope[knot+1].y) {rope[knot+1].x += 1; rope[knot+1].y -= 1} //down+right
                else if ((Math.abs(rope[knot].x - rope[knot+1].x) == 2 || Math.abs(rope[knot].y - rope[knot+1].y) == 2) && rope[knot].x < rope[knot+1].x && rope[knot].y > rope[knot+1].y) {rope[knot+1].x -= 1; rope[knot+1].y += 1} //up+left
                else if ((Math.abs(rope[knot].x - rope[knot+1].x) == 2 || Math.abs(rope[knot].y - rope[knot+1].y) == 2) && rope[knot].x < rope[knot+1].x && rope[knot].y < rope[knot+1].y) {rope[knot+1].x -= 1; rope[knot+1].y -= 1} //down+left
    
                if (knot == 8){
                    if (!touched.includes(rope[knot+1].x + '.' + rope[knot+1].y)) touched.push(rope[knot+1].x + '.' + rope[knot+1].y);
                    console.log('Just visited: ' + rope[knot+1].x + '.' + rope[knot+1].y);
                }
            }
        }
    })
    
    console.log(touched.length);