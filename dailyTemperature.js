let dailyTemperature = s => {
    let arr = [];
    arr = s;
    let out = [];
    let flag = 0;
    for(let i=0; i<arr.length; i++) {
        let count = 0;
        for(let j=i+1; j< arr.length; j++) {
            count++;
            if(arr[j]> arr[i]) {
                out[i] = count;
                flag = 1;
                break;
            }
        }
        if(flag !== 1) {
            out[i]=0;
        }
        flag=0;
    }

    out[arr.length -1] =0;

    return out;
}

let data = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperature(data));