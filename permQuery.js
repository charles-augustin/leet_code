let permQuery = (queries, m) => {
    let P =[];
    for(let i=1; i<=m; i++) {
        P.push(i);
    }
    let pos = [];
    for(let i =0 ;i < queries.length; i++) {
        let index = P.indexOf(queries[i]);
        let val = P[index];
        P.splice(index, 1);
        P.unshift(val);
        pos.push(index);
    }

    return pos;
}

let queries = [7,5,5,8,3], m = 8;

console.log(permQuery(queries, m));
