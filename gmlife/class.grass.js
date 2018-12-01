class Grass extends LivingCreature {

    mult() {
        var empty = random(this.chooseCell(0))
        this.multiply += 20;
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