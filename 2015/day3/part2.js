"use strict"

const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split('');

// north (^), south (v), east (>), or west (<)
// need to track current location
// need to make list of new locations delivered too

// console.log(INPUT);

let testRoute = INPUT // ['^', '>', '<', '^', '>', '>','<'];
// [[0, 0], [ 1, 0 ], [ 1, 1 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ]

let deliveryList = [[0, 0]];
let santaLocation = [0, 0]
let robotLocation = [0, 0]

for (var i = 0; i < testRoute.length; i += 2) {

  santaLocation = [santaLocation[0], santaLocation[1]];

  if (testRoute[i] === '^') {
    santaLocation[0] += 1;
  }
  if (testRoute[i] === 'v') {
    santaLocation[0] += -1;
  }
  if (testRoute[i] === '>') {
    santaLocation[1] += 1;
  }
  if (testRoute[i] === '<') {
    santaLocation[1] += -1;
  }
  // console.log('end: ', currentLocation);
  deliveryList.push(santaLocation);
}

for (var i = 1; i < testRoute.length; i += 2) {

  robotLocation = [robotLocation[0], robotLocation[1]];

  if (testRoute[i] === '^') {
    robotLocation[0] += 1;
  }
  if (testRoute[i] === 'v') {
    robotLocation[0] += -1;
  }
  if (testRoute[i] === '>') {
    robotLocation[1] += 1;
  }
  if (testRoute[i] === '<') {
    robotLocation[1] += -1;
  }
  // console.log('end: ', currentLocation);
  deliveryList.push(robotLocation);
}

var santaCount = {};
for (var i = 0; i < deliveryList.length; i++) {
    santaCount[deliveryList[i]] = 1 + (santaCount[deliveryList[i]] || 0);
}

console.log('robot counts: ', Object.keys(santaCount).length);
