// var a = document.getElementById('num1').value;
// let b = document.getElementById('num2').value;
let op = document.getElementById('output');
let btn = document.getElementById('btn');
// console.log(document.getElementById("num1").value)
btn.onclick = myFun;
function myFun() {
    op.innerHTML = a + b;
}
console.log('ok')