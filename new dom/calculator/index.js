let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let res = document.getElementById('res');

function add() {
    res.innerText ="The result is "+ (Number(n1.value) + Number(n1.value));
}
function sub() {
    res.innerHTML ="The result is "+ (Number(n1.value) - Number(n1.value));
}
function mul() {
    res.innerHTML ="The result is "+ (Number(n1.value) * Number(n1.value));
}
function div() {
    res.innerHTML ="The result is "+ (Number(n1.value) / Number(n1.value));
}
