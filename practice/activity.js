// var a = document.getElementById('num1').value;
// let b = document.getElementById('num2').value;
// let op = document.getElementById('output');
// let btn = document.getElementById('btn');
// console.log(document.getElementById("num1").value)
// btn.onclick = myFun;
// function myFun() {
//     op.innerHTML = a + b;
// }
// console.log('ok')
// let jsonData =
//     '[{ "_id": "1111", "index": 0, "age": 27, "eyeColor": "green", "name": { "frist": "om", "last": "suthar"}},{"_id": "1111", "index": 0, "age": 27, "eyeColor": "green", "name": { "frist": "om", "last": "suthar"}}]';
// let data = JSON.parse(jsonData);
// console.log(data[0]);
// document.getElementById('bValue').innerHTML = data[0].name.frist;
// for (let i = 0; i <= data.length; i++) {
//     console.log(data[i]);
// }
// let a = new XMLHttpRequest();
// a.open("GET", "txt.php", "true");
// let myContainer = '';
// a.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         var obj = JSON.parse(this.response);
//         for (let i = 0; i < obj.length; i++) {
//             myContainer += obj[i].name.frist + "====" + obj[i].name.last + "===";
//         }
//         console.log(this.responseText);
//         console.log(myContainer)
//         // console.log(obj);
//     }
// };
// document.getElementById('submirbutton').addEventListener("click", myFun);
// function myFun() {
//     a.onreadystatechange = function () {
//         if (a.readyState == 4) {
//             console.log(this.responseText)
//             document.getElementById('bValue').innerHTML = this.responseText
//         }
//     }
// }
// a.send();
// console.log(a);
// console.log(jsonData);
// //string functions// //

// let txt = '     hello     world'
// // console.log(txt.trim());
// console.log(trimString(txt))

// function trimString(str){
//     let val = str.replace(/\s+/g, ' ').trim();
//     return val;
// }
// function fullName(Fname, Lname) {
//         this.Fname = Fname;
//         this.Lname = Lname;
//         this.full = `${Fname} ${Lname}`
// }

// let person1 = new fullName('Om', 'Suthar')
// console.log(person1)
// function ran(min, max) {
//         let val = Math.floor(Math.random() * (max - min + 1)) + min;
//         // console.log('randomnumber' + Math.floor(Math.random() * (max - min + 1) + min))
//         // console.log('///////////////----')
//         // console.log((max - min + 1) + min)
//         // console.log('----///////')
//         // console.log('Max'+max) 
//         // console.log('Min'+min)
//         return val;
// }
// for (i = 0; i <= 5; i++) {
//         console.log(ran(4, 1))
// }
let arr1 = ['om', 1, 4, 7, 'pk', 'sk'];
let arr2 = ['askjk', 'asdkjkas', 3, 7, 0, 27, 'ksajhdkj'];

// let arr = arr1.concat(arr2)
Array.prototype.push.apply(arr1, arr2);
// console.log(arr1);
// console.log(arr2);
// console.log(arr1[3])
// delete arr2[4]
// console.log(arr2)
// arr2.splice(7, 0)
// console.log(arr2)
