var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function reqListener() {
    console.log(JSON.parse(this.responseText));
}
const operations = [
    "add",
    "subtract",
    "multiply",
    "divide",
    "cube",
    "square",
    "square-root",
    "cube-root",
    "quadratic-formula",
    "cubic-formula",
    "pythagorean-theorem",
    "factorial",
    "tetration",
    "sin",
    "cos",
    "tan",
    "random-number"
]


const URL = process.argv[2] || "https://cloud-math-c045aa7f02f6.herokuapp.com/api/math"
for(let i = 0; i<operations.length; i++){
    const a = 2
    const b = 2
    const c = 1
    const d = -1
    const e = -3
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    const request = `${URL}?operation=${operations[i]}&a=${a}&b=${b}&c=${c}&d=${d}&e=${e}`
    console.log(request)
    req.open("GET", request);
    req.send();
}
