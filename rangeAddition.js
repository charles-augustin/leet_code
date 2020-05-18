let rangeAdd = (length, updates) => {
    let arr = new Array(length);
    arr.fill(0, 0, length);
    for ([start, end, inc] of updates) {
        let temp = [], tStart = start, tEnd = end;
        temp = arr.slice(start, end + 1).map(a => a + inc);
        temp.forEach(a => {
            arr[tStart] = a;
            tStart++;
        });
    }
    return arr;
}

console.log(rangeAdd(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]]));
