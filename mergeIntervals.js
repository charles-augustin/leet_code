let mergeIntervals = (tem) => {
    let arr = [[]], out = [];
    arr = tem;
    if(arr.length == 0) 
        return arr;
    if(arr.length == 1) 
        return arr;
    arr.sort((a, b) => a[0] - b[0]);

    let newInterval = arr[0];
    out.push(newInterval);

    for (let i = 0; i < arr.length; i++) {
        if(arr[i][0] <= newInterval[1]) {
            newInterval[1] = Math.max(newInterval[1], arr[i][1]);
        }
        else {
            newInterval = arr[i];
            out.push(newInterval);
        }
    }

    return out;
}


console.log(mergeIntervals([[1,4],[0,2],[3,5]]));
