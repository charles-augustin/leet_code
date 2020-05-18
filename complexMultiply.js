let complexMultiply = (str1, str2) => {
    let a1 = str1.split('+')[0];
    let b1 = str1.split('+')[1];
    b1 = b1.substring(0, b1.indexOf('i'));

    let a2 = str2.split('+')[0];
    let b2 = str2.split('+')[1];
    b2 = b2.substring(0, b2.indexOf('i'));

    let constant = a1 * a2;
    let iTerm = (a1*b2) + (a2*b1);
    let i2Term = b1*b2*(-1);

    return ((constant+i2Term)+'+' + iTerm + 'i');
    
}


console.log(complexMultiply("1+-1i", "1+-1i"));



