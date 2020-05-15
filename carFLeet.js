var carFleet = function (target, position, speed) {
    let count = 0;
    let fleet = [];
    for (let i = 0; i < position.length; i++) {
       fleet[target - position[i]] = (target - position[i])/speed[i];
    }
    let max = 0;

    for(const a of fleet) {
        if(max < a) {
            count++;
            max = a;
        }
    }

    return count;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
