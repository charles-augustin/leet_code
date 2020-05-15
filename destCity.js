let destCity = (paths) => {
    let set = new Set(paths.map(path => path[0]));

    console.log(set);
    
    
    return paths.filter(path =>
        (!set.has(path[1]))
        ).pop();
}


console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));