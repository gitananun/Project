class Imobject1 extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 2;
    }

    chooseCell(character, ch1, ch2) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
                else if (matrix[y][x] == ch1) {
                    found.push(this.directions[i]);
                }
                else if (matrix[y][x] == ch2) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    move() {
        this.energy--;
        var empty = random(this.chooseCell(0));

        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 5;
            this.y = newY;
            this.x = newX;
        }

    }
    
    mult() {
        this.energy += 1;
        var empty = random(this.chooseCell(0, 1))
        if (empty && this.energy > 6) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            var newImb1 = new Imobject1(newX, newY);
            imobject1Arr.push(newImb1);
        }
    }

    eat() {
        var imobj1 = random(this.chooseCell(4, 2, 3));
        if (imobj1) {
            this.energy += 3;
            var newX = imobj1[0];
            var newY = imobj1[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            // cnvelu function

            for (var i in imobjectArr) {
                if (newX == imobjectArr[i].x && newY == imobjectArr[i].y) {
                    imobjectArr.splice(i, 1);
                }
            }
            for (var i in xotakerArr) {
                if (newX == xotakerArr[i].x && newY == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                }
            }
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
        this.energy -= 1;;
        if (this.energy < 2) {
            matrix[this.y][this.x] = 0;
            for (var i in imobject1Arr) {
                if (this.x == imobject1Arr[i].x && this.y == imobject1Arr[i].y) {
                    imobject1Arr.splice(i, 1);
                }

            }

        }
    }

}