const mergeSort = arr => {

    if(arr.length <= 1) 
        return arr;
    let left, right;

    let mid = Math.floor(arr.length / 2);

    left = mergeSort(arr.slice(0, mid));
    right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

let merge = (a1, a2) => {
    let sorted = [];
    while(a1.length > 0 && a2.length > 0) {
        if(a1[0] < a2 [0]) {
            sorted.push(a1.shift());
        }
        else {
            sorted.push(a2.shift());
        }
    }
    return sorted.concat(a1.concat(a2));
}


console.log(mergeSort([12,5,-3,7,-1]));
