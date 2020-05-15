let divideTwo = (a, b) => {
    let dividend=a, divisor=b, flag = 1;

    if (a < b)
        return 0;

    if (a == b)
        return 1;

    if (a < 0) {
        dividend = -a;
        flag = -flag;
    }

    if (b < 0) {
        divisor = -b;
        flag = -flag;
    }

    let count = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        count++;
    }

    return count * flag;
}


console.log(divideTwo(7, -3));
