let findPeak = (arr) => {

    if(arr.length == 1) {
        return 0;
    }

    if(arr.length == 2) {
        if(arr[0] > arr [1])
            return 0;
        else
            return 1;
    }

    let index = -1;
    for(let i = 1; i < arr.length - 1; i++) {
        if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            index = i;
        }
    }

    return index;
}

console.log(findPeak([1,2,1,3,5,6,4]));
