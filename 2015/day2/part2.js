"use strict"

const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split('\n');

// DIM: LxWxH
// dim: 2x3x4
// ribbon: 2+2+3+3
// bow: 2*3*4

function calcRibbon (presentDimentions) {
  let dimensions = presentDimentions.split('x').sort(function(a, b) {
    return a - b;
  });

  // [ '43', '3', '21' ]

  let shortSideA = dimensions[0];
  let shortSideB = dimensions[1];
  let longSide = dimensions[2];

  let presentRibbon = (shortSideA * 2) + (shortSideB * 2);
  let presentBow = shortSideA * shortSideB * longSide;

  let totalRibbon = presentRibbon + presentBow;
  return totalRibbon;
}

function listLoop() {
  let totalRibbon = 0;
  for (var i = 0; i < INPUT.length - 1; i++) {
    totalRibbon += calcRibbon(INPUT[i])
  }
  console.log(totalRibbon);
}

listLoop()
