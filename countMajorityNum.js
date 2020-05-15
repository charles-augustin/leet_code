function countMajority(nums, target) {
    let hMap = {};
    let arr = [];
    nums.forEach(element => {
        hMap.ele = element;
        let count = checkArray(arr, element);
        if (count != -1) {
            const targetIndex = arr.findIndex(f=>f.ele==element);
            hMap.count = count + 1;
            arr[targetIndex] = Object.assign({}, hMap);
        }
        else {
            hMap.count = 1;
            arr.push(Object.assign({}, hMap));
        }

       
    });

    let majorityCount;
    arr.forEach(ele => {
        if(ele.ele == target) {
            majorityCount = ele.count;
        }
    });

    if(majorityCount > (nums.length/2))
        return true;
    else
        return false; 
    
}

function checkArray(arr, c){
    for(let i=0; i< arr.length; i++) {
        if(arr[i].ele == c) {
            return arr[i].count;
        }
    }
    return -1;
}

console.log(countMajority([10,100,101,101], 101));