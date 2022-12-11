const day = '11';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const input = data.replace(/\r/g, '')
    .trim()
    .split('\n\n')
    .map((line) => {
        const [monkey, items, operation, test, yes, no] = line.split('\n');
        return {
            monkey: monkey, // .split(' ')[1].split(':').map(Number)[0],
            items: items.split(': ')[1].split(',').map(Number),
            operation: operation.split(': ')[1].split('new = old ')[1].split(' ')[0],
            value: operation.split(': ')[1].split('new = old ')[1].split(' ')[1],
            test: test.split(': ')[1].split(' ').map(Number)[2],
            yes: yes.split(': ')[1].split(' ').map(Number)[3],
            no: no.split(': ')[1].split(' ').map(Number)[3],
            inspected: 0,
        };
      });

      console.log(input);

function part1() {
    //do something
    rounds = 20;
    for (var i=1; i<=rounds; i++) {
        for (var key in input) {
            var count = input[key].items.length;
            input[key].inspected += count; 
            console.log('Starting item count: ' + count);
            for (var j=0; j<count; j++) {
                console.log('Round ' + i, input[key].monkey, input[key].items);
                var monkey = input[key];
                var thing = monkey.items[0];
                if (monkey.value == 'old') {
                    console.log(thing + ' now equals ' + thing*thing);
                    thing = thing * thing;
                } else if (monkey.operation == '*') {
                    console.log(thing + ' now equals ' + thing * parseInt(monkey.value));
                    thing = thing * parseInt(monkey.value);
                    console.log(thing);
                } else {
                    console.log(thing + ' now equals ' + (thing + parseInt(monkey.value)));
                    thing += parseInt(monkey.value);
                    console.log(thing);
                }
                console.log(thing + ' now equals ' + parseInt(thing/3));
                thing = parseInt(thing/3);
                console.log(thing);
                if (thing%monkey.test == 0) {
                    input[monkey.yes].items.push(thing)
                } else {
                    input[monkey.no].items.push(thing)
                }
                monkey.items.shift();
                console.log('Ending item count: ' + input[key].items.length);
            }
            
        }
        console.log(input);
    }
    
    var mkb = [];
    for (var inc in input) {
        mkb.push(input[inc].inspected);
    }
    mkb = mkb.sort(function(a, b){return b - a});
    console.log(mkb[0]*mkb[1]);

}

function part2() {
    //do something
    var superMod = 1;
    for (var mod in input) {
        superMod = superMod*input[mod].test;
    }

    rounds = 10000;
    for (var i=1; i<=rounds; i++) {
        for (var key in input) {
            var count = input[key].items.length;
            input[key].inspected += count; 
            for (var j=0; j<count; j++) {
                var monkey = input[key];
                var thing = monkey.items[0];
                if (monkey.value == 'old') {
                    thing = thing * thing;
                } else if (monkey.operation == '*') {
                    thing = thing * parseInt(monkey.value);
                } else {
                    thing += parseInt(monkey.value);
                }

                thing = parseInt(thing%superMod);
                
                if (thing%monkey.test == 0) {
                    input[monkey.yes].items.push(thing)
                } else {
                    input[monkey.no].items.push(thing)
                }
                monkey.items.shift();
            }
            
        }
        
    }
    console.log(input);
    
    var mkb = [];
    for (var inc in input) {
        mkb.push(input[inc].inspected);
    }
    mkb = mkb.sort(function(a, b){return b - a});
    console.log(mkb[0]*mkb[1]);


}

//part1();
part2();