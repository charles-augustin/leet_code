var reverseSubstring = s => {
    let stack = [];

    for(let char of s) {
        if(char!==')') {
            stack.push(char);
            continue;
        }
        let queue = [];
        let c = stack.pop();

        while(c!=='(') {
            queue.push(c);
            c = stack.pop();
        }

        while(queue.length>0) {
            stack.push(queue.shift());
        }

    }

    return stack.join("");
}


console.log(reverseSubstring("(u(love)i)"));
