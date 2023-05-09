// document.getElementById('logo').addEventListener("click", function () {
//     alert('logo');
//     let name = prompt('Enter anything');
//     document.getElementById('name').innerHTML = name;
// })
// let myarr = new Array(5);
// myarr[0] = '1'
// myarr[1] = '2'
// myarr[2] = '3'
// myarr[3] = '4'
// myarr[4] = '5'
// myarr[5] = '6'
// myarr[6] = '7'
// console.log(myarr)
// console.log(myarr.length)
// console.log('-----------')

// let arrVal = '';
// myarr.forEach(function (d, e, f) {
//     console.log(d + '///' + e + '///' + f);
//     // console.log(myarr)
// })
// for (let i = 0; i <= myarr.length - 1; i++) {
//     // console.log(myarr[i])
//     arrVal = myarr[i];
//     console.log('===' + arrVal)
//     document.getElementById('arrVal').innerHTML = myarr[i];
// }

// let obj = new Object();
// obj.firstname = 'om';
// obj.gender = 'male';
// obj.age = 55;
// console.log(obj);

// let obj1 = { fname: 'om', gender: 'male', age: 22 };
// console.log(obj1);
// console.log(obj1.fname);


// function objectt(a, b, c) {
//     this.fname = a;
//     this.lname = b;
//     this.age = c;
// }
// let obj2 = new objectt('om', 'suthar', 22);
// console.log(obj2)
// let obj3 = new objectt('harry', 'lame', 45);
// console.log(obj3.fname)

// var b = 1;
// function myFuunction() {
//     b++;
//     console.log(b + 'Hello')
// }
// myFuunction();
// myFuunction();
// function addition(a) {
//     return a + b;
// }
// console.log(addition(8));
// console.log(addition(10));

// let val = 'okey';

// function myFunc() {
//     console.log(val)
//     console.log(typeof (val))
// }
// myFunc();
let myVar = document.getElementById('logo');
myVar.onclick = myFun;
function myFun() {
    myVar.innerHTML = 'TCTG';
    // myVar.style.backgroundColor = 'white';
}
let myImg = document.getElementById('myHeader');
myImg.onmouseenter = myOutput;
function myOutput(e) {
    console.log(e.type)
}