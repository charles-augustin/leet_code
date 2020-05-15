class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(dat) {
        this.data[this.top] = dat;
        this.top = this.top + 1;
    }

    pop() {
        if (this.top != 0) {
            this.top = this.top - 1;
            return this.data.pop();
        }
    }

    peek() {
        return this.data[this.top - 1];
    }

    length() {
        return this.top;
    }

    print() {
        let i = this.top-1;
        while (i>=0) {
            console.log(this.data[i]);
            i--;
        }
    }

    callBaseBallPoints(arr) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] == "C")
                this.pop();
            else if (arr[i] == "D") {
                let val = this.peek();
                this.push(val * 2);
            }
            else if(arr[i] == "+") {
                let j=0, sum = 0, ele = this.top - 1;
                while(j!=2) {
                    sum += parseInt(this.data[ele]);
                    j++;
                    ele--;
                }
                this.push(sum);
            }
            else {
                this.push(parseInt(arr[i]));
            }
        }
        this.sumofStack();
    }

    sumofStack() {
        let i = this.top-1, sum=0;
        while (i>=0) {
            sum += this.data[i];
            i--;
        }
        console.log(sum);
    }
}

let stack = new Stack();

// stack.push(10);
// stack.push(20);

// stack.print();

// console.log(stack.top);

let test = ["5","-2","4","C","D","9","+","+"];

stack.callBaseBallPoints(test);

