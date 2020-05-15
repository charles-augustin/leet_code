var findSmallestRegion = (regions, region1, region2) => {
    const graph = createGraph(regions);
    return findLCA(graph, region1, region2);
}

function createGraph(regions) {
    const graph = {};
    for(const region of regions) {
        for(let i=1; i< region.length; i++) {
            graph[region[i]] = region[0];
        }
    }
    return graph;
}

function findLCA(graph, region1, region2) {
    let path = new Set();
    let p1 = region1;

    while(p1) {
        path.add(p1);
        p1 = graph[p1]
    }

    let p2 = region2;

    while(!path.has(p2)) {
        p2 = graph[p2];
    }

    return p2;
}

let arr = [["Earth","North America","South America"],
["North America","United States","Canada"],
["United States","New York","Boston"],
["Canada","Ontario","Quebec"],
["South America","Brazil"]];

console.log(findSmallestRegion(arr, "Quebec", "New York"));