var isPowerOfThree = function(n) {
    if(n==0)
        return false;
    else if(parseInt(n%3)==0 && (checkLastDigit(n)))
        return true;
    return false;
};
    
function checkLastDigit(n) {
    let num = n;
    if( num%10 == 1 || num%10 == 3|| num%10 == 7 || num%10 == 9)
        return true;
    else 
        return false;
}

console.log(isPowerOfThree(9));