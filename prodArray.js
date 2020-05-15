function prodArray(arr) {

    let newArr = [];
    if (arr.length <= 1)
        return arr;
    for (let i = 0; i < arr.length; i++) {
        let slice1 = arr.slice(0, i);
        let slice2 = arr.slice(i + 1, arr.length);

        let prod = (slice1.length > 0 ? slice1.reduce((a, b) => a * b) : 1) *
            (slice2.length > 0 ? slice2.reduce((a, b) => a * b) : 1);

        newArr[i] = prod;
    }
    return newArr;
}

console.log(prodArray([2]));
