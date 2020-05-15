// var rankTeams = function(votes) {
//     if (votes.length === 1) return votes[0];
//     const score = new Map(votes[0].split('').map(c => [c, new Array(votes[0].length).fill(0)]));
//     for (s of votes) {
//         for (let i = 0; i < s.length; i++) {
//             score.get(s[i])[i]++;
//         }
//     }

//     return votes[0].split('').sort((a,b) => {
//         for (let i = 0; i < votes[0].length; i++) {
//             if (score.get(a)[i] > score.get(b)[i]) return -1;
//             if (score.get(a)[i] < score.get(b)[i]) return 1;
//         }
//         return a < b ? -1 : 1;
//     }).join('');

    
    
// };


// console.log(rankTeams(["ABC","ACB","ABC","ACB","ACB"]));



// let testObject = {
//     "test" : "testValue",
//     "value" : "Matrix",
//     "offset": "null"
// };

// for(t in testObject) {
//     console.log(testObject[t]);
// }



// let a = ["2", "3", "4"];

// console.log(a.reverse());

// console.log(a.values().next()); 


// let arr = new Array(4);

// console.log(arr.length);
// console.log(arr[0]);
let a = 0;
let prom = new Promise(function(resolve, reject) {
        if(a==1)
            resolve("This is success");
        else
            reject("This is failure");
    });

prom.then(res => {
    console.log(res);
}, err => console.log(err)
)

