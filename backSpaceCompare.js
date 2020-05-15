function backSpaceCompare(S, T) {
    let s_stack = [], t_stack = [];
    for (let s of S) {
        if (s == '#') {
            if (s_stack.length != 0)
                s_stack.pop();
        }
        else {
            s_stack.push(s);
        }
    }

    for (let t of T) {
        if (t == '#') {
            if (t_stack.length != 0)
                t_stack.pop();
        }
        else {
            t_stack.push(t);
        }
    }

    return s_stack.join("") === t_stack.join("") ? true : false;
}

console.log(backSpaceCompare("", "c#d#"));