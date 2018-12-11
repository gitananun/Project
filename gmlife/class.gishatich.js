var LivingCreature = require('./LivingCreature.js')

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 10;
    }
    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }

    move() {
        var empty = random(this.chooseCell(1));
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }

    }

    mult() {

        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 8) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var newGsh = new Gishatich(newX, newY);
            gishatichArr.push(newGsh);
        }
    }

    eat() {
        var xotak = random(this.chooseCell(2));
        if (xotak) {
            this.energy += 5;
            var newX = xotak[0];
            var newY = xotak[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            for (var i in xotakerArr) {
                if (newX == xotakerArr[i].x && newY == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                }
            }

            this.x = newX;
            this.y = newY;

        }
    }

    die() {
        this.energy -= 1;
        if (this.energy < 1) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }

            }

        }
    }

}
