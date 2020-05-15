var constructRectangle = function(area) {
    let arr=[];
    let w = parseInt(Math.sqrt(area));
    while(area % w !=0)
        w--;

    arr.push(area/w);
    arr.push(w);
    return arr;
};

console.log(constructRectangle(6));


