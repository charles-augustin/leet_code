class MovingAverage {
    constructor() {
        this.stack = [];
        this.size = 3;
    }

    next(val) {

        this.stack.push(val);
        let sum=0;
        if (this.stack.length < this.size) {
            this.stack.forEach(s => {

                sum += s;
                
            });

            return sum / this.stack.length;
        }

        else {
            let j = 0;
            let sum=0;
            while (j < this.size) {
                sum += this.stack[(this.stack.length - 1) - j];
                j++;
            }
            return sum / this.size;
        }
    }
}


let movAvg = new MovingAverage();

console.log(movAvg.next(1));
console.log(movAvg.next(10));
console.log(movAvg.next(3));
console.log(movAvg.next(5));

