let bubbleSort = (arr) => {
    const sort = (list, a, b) => {
        [list[a], list[b]] = [list[b], list[a]]
    }

    for(let i = 0; i < arr.length-1 ; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                sort(arr, j , j+1);
            }
        }
    }

    return arr;
}

console.log(bubbleSort([-2, 3, 0 ,-1]));
