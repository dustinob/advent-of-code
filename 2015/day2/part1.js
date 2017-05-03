"use strict"

const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split('\n');

// dim: 4x23x21 LxWxH
// 2*l*w + 2*w*h + 2*h*l
function presentWrap(string) {
  let dimensions = string.split('x');
  // [ '43', '3', '21' ]

  let length = dimensions[0];
  let width = dimensions[1];
  let height = dimensions[2];

  let extra = Math.min((length * width), (width * height), (height * length));

  let total = (2 * length * width) + (2 * width * height) + (2 * height * length) + extra;
  console.log(total);
  return total;
}

function listLoop() {
  let totalWrap = 0;
  for (var i = 0; i < INPUT.length - 1; i++) {
    totalWrap += presentWrap(INPUT[i])
  }
  console.log(totalWrap);
}

listLoop()
