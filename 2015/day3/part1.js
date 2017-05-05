"use strict"

const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split('');

// north (^), south (v), east (>), or west (<)
// need to track current location
// need to make list of new locations delivered too

// console.log(INPUT);

let testRoute = ['^', '>', '<', '^', '>', '>'];
// {x: 0, y: 1}, {x: 1, y: 1}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}

let receivedPresent = [];


for (var i = 0; i < testRoute.length; i++) {

  let currentLocation = {x: 0, y: 0}

  console.log('begin: ', currentLocation);
  if (testRoute[i] === '^') {
    currentLocation.y += 1;
    console.log('north: ', currentLocation);
  }
  if (testRoute[i] === 'v') {
    currentLocation.y += -1;
    console.log('south: ', currentLocation);
  }
  if (testRoute[i] === '>') {
    currentLocation.x += 1;
    console.log('east: ', currentLocation);
  }
  if (testRoute[i] === '<') {
    currentLocation.x += -1;
    console.log('west: ', currentLocation);
  }
  console.log('end: ', currentLocation);

  receivedPresent.push(currentLocation);

}

console.log(receivedPresent);
