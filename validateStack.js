let validateStack = (pushed, popped) => {
    let stack = [];
    let i = 0;
    for(let push of pushed) {
        stack.push(push);
        while(stack.length && i < pushed.length && popped[i] == stack[stack.length-1]) {
            stack.pop();
            i++;
        }
    }
    return i === pushed.length ? true : false;
}

let data1 = [1,2,3,4,5];
let data2 = [4,5,3,1,2];

console.log(validateStack(data1, data2));