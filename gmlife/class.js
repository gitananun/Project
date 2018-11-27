class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
           
        }
        return found;
       
    }

    mult() {
        var empty = random(this.chooseCell(0))
        this.multiply+=20;
        if (empty && this.multiply >= 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
            this.multiply = 0;
        }
    }
}






class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
           
        }
        return found;
       
    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt)
        }
    }

    move(){
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat(){
        var food = random(this.chooseCell(1))
        if (food){
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for(var i in grassArr){
                if(grassArr[i].x==newX && grassArr[i].y==newY){
                    grassArr.splice(i,1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy+=20
        }
    }

    die(){
        if(this.energy<=0){
            matrix[this.y][this.x] = 0
            for(var i in xotakerArr){
                if(xotakerArr[i].x==this.x && xotakerArr[i].y==this.y){
                    xotakerArr.splice(i,1)
                }
            }
        }
    }
}



class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 5 ;
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
        this.energy++;        
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
            this.energy+=4;
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
        this.energy -=1 ;
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
        if(empty > 5){
            
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
            this.energy+=3;
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
        if(empty > 5){
            this.energy-=5;
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





class Imobject1 {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 3;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],         
            [this.x - 1, this.y],      
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
            
        ];
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],         
            [this.x - 1, this.y],      
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
            
        ];
    }

    chooseCell(character,ch1,ch2) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
                else if(matrix[y][x] == ch1){
                    found.push(this.directions[i]);
                }
                else if(matrix[y][x] == ch2){
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
       this.energy+=1;
        var empty = random(this.chooseCell(0,1))
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
        var imobj1 = random(this.chooseCell(4,2,3));
        if (imobj1) {
            this.energy+=3;
            var newX = imobj1[0];
            var newY = imobj1[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            ////// cnvelu function

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
        this.energy -=1; ;
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