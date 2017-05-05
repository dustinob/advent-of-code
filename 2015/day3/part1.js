"use strict"

const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split('');

// north (^), south (v), east (>), or west (<)
// need to track current location
// need to make list of new locations delivered too

// console.log(INPUT);

let testRoute = ['^', '>', '<', '^', '>', '>','<'];
// [[0, 0], [ 1, 0 ], [ 1, 1 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ]

let receivedPresentList = [[0, 0]];
let currentLocation = [0, 0]

for (var i = 0; i < testRoute.length; i++) {

  currentLocation = [currentLocation[0], currentLocation[1]];

  if (testRoute[i] === '^') {
    currentLocation[0] += 1;
  }
  if (testRoute[i] === 'v') {
    currentLocation[0] += -1;
  }
  if (testRoute[i] === '>') {
    currentLocation[1] += 1;
  }
  if (testRoute[i] === '<') {
    currentLocation[1] += -1;
  }
  // console.log('end: ', currentLocation);
  receivedPresentList.push(currentLocation);
}

console.log('receivedPresentList: ', receivedPresentList);
let uniquePresentList = [];

uniquePresentList = receivedPresentList.filter(function(coordinate) {
  return coordinate != uniquePresentList; 
});


console.log('uniquePresentList: ', uniquePresentList);
