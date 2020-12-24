function smallPositive(A) {
    A.sort();
    A = [... new Set(A)];
    

    A = A.filter(a => {
        return a>0;
    })
    if(A.length == 0)
        return 1;

    for (let i = 1; i <= A.length + 1; i++) {
            if (!A.includes(i))
                return i;
    }
}


console.log(smallPositive([2,90]));
