let validParenthesis = (str) => {
    let ch = [...str];

    let l_stack = [], s_stack = [];

    let i = 0;
    for(let c of ch) {
        if(c == '(')
            l_stack.push(i);
        else if(c == '*')
            s_stack.push(i);
        else {
            if(l_stack.length==0 && s_stack.length == 0)
                return false;
            else if(l_stack.length > 0)
                l_stack.pop();
            else
                s_stack.pop();
        }
        i++;
    }

    while(l_stack.length > 0 && s_stack.length > 0) {
        if(l_stack.pop() > s_stack.pop()){
            return false
        }
    }

    return l_stack.length == 0;
}


console.log(validParenthesis(")"));
