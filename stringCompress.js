let stringCompress = (S, k) => {
    let i = 0;
    let temp = [...S];
    let set = new Set(temp);
    if (set.length == 1) {
        let te = temp.length + set[0];
        return te.length;
    }

    let map = new Map();
    while (i + k <= S.length) {
        temp.splice(i, k);
        let val = compress(temp);
        map.set(val, val.length);
        i = i + 1;
        temp = [...S];
    }

    let values = Array.from(map.values());
    values.sort();
    // console.log(values[0]);
    return values[0];
}

function compress(data) {
    let t = "";
    for (let i = 1; i <= data.length; i++) {
        let count = 1;
        if (data[i] == data[i - 1]) {
            while (data[i] == data[i - 1]) {
                count++;
                i++;
            }
            t += count + data[i - 1];
        }
        else {
            t += data[i - 1];
        }

    }
    return t;
}

console.log(stringCompress("ABBC", 0));

// console.log(compress("ABBBCCDDCCC"));

