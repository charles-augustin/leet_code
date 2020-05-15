let minSubSequence = function (arr) {
    let sum = 0, array = [];
    array = arr;;
    array.sort((a, b) => b - a);

    let list = [];

    let newArray = [];
    for (let a of array) {
        newArray.push(a);
    }

    for (let num of array) {
        sum += num;
        list.push(num);
        newArray.shift();
        if (newArray.length > 0) {
            if (sum > newArray.reduce((a, b) => {
                return a + b;
            })) {
                break;
            }
        }
    }

    return list;
}

let test = [6];

console.log(minSubSequence(test));