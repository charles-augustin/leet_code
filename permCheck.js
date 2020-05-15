let permString = str => {
    let letters = str.split('');
    let results = [[letters.shift()]];

    while (letters.length) {
        const curLetter = letters.shift();
        let tempLetter = [];
        results.forEach(result => {
            let i = 0;
            while (i <= result.length) {
                const tmp = [...result];
                tmp.splice(i, 0, curLetter);
                tempLetter.push(tmp);
                i++;
            }
        })
        results = tempLetter;
    }


    return results.map(letterArray => letterArray.join(''))
        .filter((val, i, arr) => val == arr[i])
        .sort();
}



console.log(permString("abe"));
