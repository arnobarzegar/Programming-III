let matrix = [];
let rows = 25; 
let columns = 25; 

for (let y = 0; y < rows; y++) {
matrix[y] = [];
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random() * 100);
if (a >= 0 && a < 70) {
matrix[y][x] = 0;
}
if (a >= 70 && a < 83) {
matrix[y][x] = 1;
}
else if (a >= 83 && a < 90) {
matrix[y][x] = 2;
}
else if (a >= 90 && a < 95) {
matrix[y][x] = 3;
}
else if (a >= 95 && a < 98) {
matrix[y][x] = 4;
}
else if (a >= 98 && a < 100) {
matrix[y][x] = 6;
}
}
}

var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var energyArr = [];
var asisterArr = [];
var villagerArr = [];
var side = 20;


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x,y,2);
                grassEaterArr.push(et);
                
            }
            else if (matrix[y][x] == 3) {
                var ete = new gishatich(x,y,3);
                gishatichArr.push(ete);
                
            }
            else if (matrix[y][x] == 4) {
                var se = new Energy(x,y,4);
                energyArr.push(se);
                
            }
            else if (matrix[y][x] == 5) {
                var st = new Asister(x,y,5);
                asisterArr.push(st);
                
            }
            else if (matrix[y][x] == 6) {
                var mani = new Villager(x,y,6);
                villagerArr.push(mani);
                
            }
        }
    }
 
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("cyan");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("lightcoral");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
     for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();        
    }
    for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].mul();
        gishatichArr[i].die();        
    }
    for (var i in energyArr) {
        energyArr[i].move();
        energyArr[i].eat(); 
        energyArr[i].mul();  
    }
    for (var i in villagerArr) {
        villagerArr[i].move();
        villagerArr[i].eat(); 
        villagerArr[i].mul();
    }
}