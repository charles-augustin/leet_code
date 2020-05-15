function uniqueCharacter(dat) {
    let arr = [];
    let map = {};

    for(let i = 0; i < dat.length; i++) {
        map.letter = dat[i];
        let c = checkArray(arr, dat[i]);
        if( c != -1){
            const targetIndex = arr.findIndex(f=>f.letter==dat[i]);
            map.count = c + 1;
            arr[targetIndex] = Object.assign({}, map);
        }
        else {
            map.count = 1;
            arr.push(Object.assign({}, map));
        }
    }
    
    for(let i=0; i<dat.length; i++) {
        let t = arr.find((a) => {
            if(a.letter == dat[i])
                return a});
        if(dat[i] == t.letter) {
            if(t.count == 1)
                return i;
        }
    }
    return -1;
}

function checkArray(arr, c){
    for(let i=0; i< arr.length; i++) {
        if(arr[i].letter == c) {
            return arr[i].count;
        }
    }
    return -1;
}

console.log(uniqueCharacter("dddccdbba"));