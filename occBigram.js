
let occBigram = (text, first, second) => {
let splitText = text.split(' ');

let out = [];
for (let i = 1; i < splitText.length - 1; i++) {
    if(splitText[i-1] == first && splitText[i] == second) 
        out.push(splitText[i+1]);
}

return out;
}

let text = "alice is a good girl she is a good student";

console.log(occBigram(text, "a", "good"));




