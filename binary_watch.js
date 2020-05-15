/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var out=[];
    for(var h=0;h<12;h++) {
        for(var m=0;m<60;m++) {
            if(bitCount(h) + bitCount(m) == num) {
                var new_m = m<10 ? "0"+m : m;
                out.push(h+":"+new_m);
            }
        }
    }
    return out;
};

function bitCount(n) {
    var count = 0;
    
    while(n>0) {
        count+= n & 1;
        n >>= 1;
    }
    
    return count;
}

console.log(readBinaryWatch(3));
