var countNumbersWithUniqueDigits = function (n) {
    var limit = pow(n), count = 0;
    for (var i = 0; i < limit; i++) {
        var num = i, visited = [];

        while (num != 0) {
            if (visited[num % 10])
                break;
            visited[num % 10] = true;
            num = parseInt(num / 10);
        }

        if(num==0){
            count++;
        }
    }
    return count;
};

function pow(p) {
    var power = 1;
    for (var i = 0; i < p; i++) {
        power = power * 10;
    }
    return power;
}

console.log(countNumbersWithUniqueDigits(2));
