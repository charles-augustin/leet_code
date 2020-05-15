let displayHashTable = orders => {
    let map = new Map();
    let items = new Set();

    for ([_, tableNo, food] of orders) {
        if (!map.has(tableNo)) {
            map.set(tableNo, new Map());
        }

        map.get(tableNo).has(food) ? map.get(tableNo).set(food, map.get(tableNo).get(food) + 1) :
            map.get(tableNo).set(food, 1);

        items.add(food);
    }

    let table = [[...items].sort()];

    for (let key of [...map.keys()].sort((a, b) => a - b)) {
        let row = [key];

        for (x of table[0]) {
            row.push(map.get(key).has(x) ? map.get(key).get(x)+'' : '0');
        }

        table.push(row);
    }

    table[0].unshift('Table');

    return table;
}


let test = [["David", "3", "Ceviche"], ["Corina", "10", "Beef Burrito"], ["David", "3", "Fried Chicken"], ["Carla", "5", "Water"], ["Carla", "5", "Ceviche"], ["Rous", "3", "Ceviche"]];

console.log(displayHashTable(test));



