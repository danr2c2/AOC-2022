const day = '07';
const filename = 'day' + day + '/input.txt';
const fs = require('fs');
var data = fs.readFileSync(filename, 'utf-8');
const lines = data.replace(/\r/g, '')
    .trim()
    .split('\n');

function createTree(lines) {
    const tree = {
        name: "/",
        isDirectory: true,
        children: [],
    }; // node: name, isDirectory, size, children, parent
    
    let currentNode = tree;
    let currentCommand = null;
    
    for (const line of lines) {
        if (line[0] === "$") {
        // command
        const match = /^\$ (?<command>\w+)(?: (?<arg>.+))?$/.exec(line);
        console.log(match);
    
        currentCommand = match.groups.command;
    
        if (currentCommand === "cd") {
            const target = match.groups.arg;
            switch (target) {
            case "/":
                currentNode = tree;
                break;
            case "..":
                currentNode = currentNode.parent;
                break;
            default:
                currentNode = currentNode.children.find(
                (folder) => folder.isDirectory && folder.name === target
                );
            }
        }
        } else {
        if (currentCommand === "ls") {
            // For now, it's a file/directory from a 'ls' command
            const fileMatch = /^(?<size>\d+) (?<name>.+)$/.exec(line);
            if (fileMatch) {
            const node = {
                name: fileMatch.groups.name,
                size: parseInt(fileMatch.groups.size),
                isDirectory: false,
                parent: currentNode,
            };
            currentNode.children.push(node);
            }
            const dirMatch = /^dir (?<name>.+)$/.exec(line);
            if (dirMatch) {
            const node = {
                name: dirMatch.groups.name,
                isDirectory: true,
                children: [],
                parent: currentNode,
            };
            currentNode.children.push(node);
            }
        } else {
            throw new Error("unkown state");
        }
        }
    }
    
    return tree;
}
  
function printTree(node, depth = 0) {
    console.log(
      `${" ".repeat(depth * 2)}- ${node.name} (${
        node.isDirectory ? "dir" : `file, size=${node.size}`
      })`
    );
    if (node.isDirectory) {
      for (const child of node.children) {
        printTree(child, depth + 1);
      }
    }
  }
  
function getSize(node, directoryCallback = () => {}) {
    if (!node.isDirectory) {
      return node.size;
    }
    const directorySize = node.children
      .map((child) => getSize(child, directoryCallback))
      .reduce((a, b) => a + b, 0);
  
    directoryCallback(node.name, directorySize);
  
    return directorySize;
}


function part1() {
    //do something
    const thresholdSize = 100000;
  const tree = createTree(lines);

  //printTree(tree);

  let sumSmallFolder = 0;

  getSize(tree, (name, size) => {
    if (size <= thresholdSize) {
      sumSmallFolder += size;
    }
  });
    
  console.log(sumSmallFolder);

}

function part2() {
    //do something


}

part1();
part2();