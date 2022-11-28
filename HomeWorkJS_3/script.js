// task 1

console.log(array(7, 2));

function array(x, y) {
    let key = [x, y];
    return key.sort();
}


// task 2

// let a = document.querySelector('#one').getAttribute('href');
// let b = document.querySelector('#two').getAttribute('href');
// let c = document.querySelector('#three').getAttribute('href');
// let d = document.querySelector('#four').getAttribute('href');
// let e = document.querySelector('#five').getAttribute('href');
// let shrek = [a, b, c, d, e];
// console.log(shrek);


// //task 3

// let selectorName = document.querySelector('#seven');
// let attName = "href";
// let attValue = "https://www.instagram.com";
// addAttribute(selectorName, attName, attValue);

// function addAttribute(x, y, z) {
//     x.setAttribute(y, z);
//     console.log(x);
// }


// // task 4

// let img_1 = prompt("Напишите url адрес первого изображения");
//    let img_2 = prompt("Напишите url адрес второго изображения");
//    let img_3 = prompt("Напишите url адрес третьего изображения");
//    let img_4 = prompt("Напишите url адрес четвёртого изображения");
//    let img_5 = prompt("Напишите url адрес пятого изображения");

//    let image = [img_1, img_2, img_3, img_4, img_5]; 

// let images = document.querySelectorAll('.images > img');

// for (let i = 0; i < 10; i++) {
//     if (i == 2) {
//         images[i].setAttribute('src', img_2);
//     } 
//     if (i == 4) {
//         images[i].setAttribute('src', img_4);
//     }
// } 


// // task 5

let userName = prompt("Ваше имя?");
let hobby = prompt("URL адрес изображения, которая описывает Ваше хобби");
let prof = prompt("URL адрес изображения, которая описывает Вашу профессию");
let family = prompt("URL адрес изображения, которая описывает Вашу семью");

let header = document.querySelector('h1');
header.innerHTML = "Hello, " + userName + "!";

document.querySelector('#one > img').setAttribute('src', hobby);
document.querySelector('#two > img').setAttribute('src', prof);
document.querySelector('#three > img').setAttribute('src', family);