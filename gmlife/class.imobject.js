var LivingCreature = require('./LivingCreature.js')
module.exports = class Imobject extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 4;
    }

    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }

    move() {
        this.energy--;
        var empty = random(this.chooseCell(0));
        if (empty > 5) {

        }
        else if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 4;
            this.y = newY;
            this.x = newX;
        }

    }

    mult() {

        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 3) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            var newImb = new Imobject(newX, newY);
            imobjectArr.push(newImb);
        }
    }

    eat() {
        var imobj = random(this.chooseCell(3));
        if (imobj) {
            this.energy += 3;
            var newX = imobj[0];
            var newY = imobj[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            ////// cnvelu function

            for (var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }

            this.x = newX;
            this.y = newY;

        }
    }

    die() {
        var empty = random(this.chooseCell(0));
        if (empty > 5) {
            this.energy -= 5;
        }
        else if (this.energy < 2) {
            matrix[this.y][this.x] = 0;
            for (var i in imobjectArr) {
                if (this.x == imobjectArr[i].x && this.y == imobjectArr[i].y) {
                    imobjectArr.splice(i, 1);
                }

            }

        }
    }

}
