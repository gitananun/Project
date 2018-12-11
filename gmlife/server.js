var express = require('express');
var app = express();
var server = require('http').Server(app);
var Gishatich = require('./class.gishatich.js')
var Grass = require('./class.grass.js')
var Imobject = require('./class.imobject.js')
var Imobject1 = require('./class.imobject1.js')
var Xotaker = require('./class.xotaker.js')
// var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function () { console.log("You are connected to Port 3000 ;)") });




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function matrica(m, n) {
    var matrix = [];
    for (var i = 0; i < m; i++) {
        matrix.push([]);
        for (var k = 0; k < n; k++) {
            matrix[i].push(getRandomInt(0, 6));
        }
    }
    return matrix;

}

var matrix = matrica(32, 32);
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var imobjectArr = [];
var imobject1Arr = [];

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            var obj = new Grass(x, y, 1);
            grassArr.push(obj);

        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y, 2);
            xotakerArr.push(xt);
        }
        else if (matrix[y][x] == 3) {
            var gsh = new Gishatich(x, y, 3);
            gishatichArr.push(gsh);
        }
        else if (matrix[y][x] == 4) {
            var imb = new Imobject(x, y, 4);
            imobjectArr.push(imb);
        }
        else if (matrix[y][x] == 5) {
            var imb1 = new Imobject1(x, y, 5);
            imobject1Arr.push(imb1);
        }
    }
}



function draw() {
    for (var i in grassArr) {
        grassArr[i].mult();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].move();
        xotakerArr[i].eat();
        xotakerArr[i].mult();
        xotakerArr[i].die();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].mult();
        gishatichArr[i].die();
    }
    for (var i in imobjectArr) {
        imobjectArr[i].move();
        imobjectArr[i].eat();
        imobjectArr[i].mult();
        imobjectArr[i].die();
    }
    for (var i in imobject1Arr) {
        imobject1Arr[i].move();
        imobject1Arr[i].eat();
        imobject1Arr[i].mult();
        imobject1Arr[i].die();

    }

}

var setInt = setInterval(draw, 500);
console.log(setInt);

//Crate function that get element from array random