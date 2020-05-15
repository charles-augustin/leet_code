var findContentChildren = function(g, s) {
    g=g.sort((a,b) => {return a-b});
    s=s.sort((a,b) => {return a-b});
    let count =0;
    for(let i=0; count<g.length && i<s.length; i++){
        if(g[count]<=s[i])
            count++;
    }
    return count;
};


console.log(findContentChildren([10,9,8,7],[5,6,7,8]));