class Imobject {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 2;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }

            }

        }
        return found;
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
