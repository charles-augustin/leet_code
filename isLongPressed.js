let isLongPressedName = (name, typed) => {
    let j = 0;
    for (let i = 0; i < name.length; i++) {
        let count = 0, prev;
        while (typed[j] == name[i] && j < typed.length) {
            prev = typed[j];
            count++;
            j++;
        }
        if (typed[j] != name[i])
            return false;
        if (count < 1) {
            return false;
        }
    }
    return true;
}

console.log(isLongPressedName("leelee", "lleeelee"));
