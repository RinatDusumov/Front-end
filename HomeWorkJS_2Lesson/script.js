// task 1
let d = 7;
console.log(d);
console.log(d ** 2);
console.log(d ** 3);

// task 2

let z = +prompt("Напишите целое число");
if (z > 0) {
    z *= 2;
    console.log(z);
} else {
    console.log("Число отрицательное");
}

// task 3
let num = +prompt("Напишите целое число");
if (num > 0) {
    console.log("Положительное");
} else if (num < 0) {
    console.log("Отрицательное");
} else {
    console.log("Ноль");
} 

// task 4
let x = +prompt("Напишите целое число");
let y = +prompt("Напишите целое число");
if (x > y) {
    console.log(x += y);
} else if (x < y) {
    console.log(x *= y);
} else {
    console.log("Числа одинаковые");
} 

// task 5
let x1 = +prompt("Напишите целое число");
if (x1 < 0) {
    console.log(x1 ** 2);
} else {
    console.log("Ошибка");
} 

// task 6
let b = +prompt("Напишите учеников");
let v = +prompt("Напишите количество стульев");
if (b < v || b == v) {
    console.log("Стульев хватает");
} else {
    console.log("Стульев не хватает");
} 

// task 7
console.log("Start");
for (let i = 1; i <= 9; i++) {
    console.log(i);
}
console.log("Finish"); 

// task 8
let c = [24, 43, 50, 99, 40, 25, 15];
let g = [];
for (let i = 0; i < 7; i++) {
    if (c[i] % 5 == 0) {
        g.push(c[i]);
    }
}
console.log(g.sort()); 

// task 9
let key = +prompt("Напишите целое число");
let count = 0;
while (count < 7) {
    if (key % 2 == 0) {
        console.log(key += 1);
        count++;
            if (key % 2 != 0) 
            console.log(key += 2);
            count++;
    } else {
        console.log(key += 2);
        count++;
    } 
}

// task 10 
let li = [45, 5, 33, 10, 15, 9];
for (let i = 0; i < li.length; i++) {
    if (li[i] >= 15) {
        console.log(li[i]);
    }
} 

// task 11
for (let i = 0; i < li.length; i++) {
    if (li[i] % 2 != 0) {
        console.log(li[i]);
    }
}

// task 12
for (let i = 0; i < li.length; i++) {
    if (li[i] % 3 == 0) {
        console.log(li[i]);
    }
} 

// task 13 
let rsa = [45, 1, 33, 3, 4];
let sum = 0;
for (let i = 0; i < rsa.length; i++) {
    if (rsa[i] == i) {
        sum += rsa[i];
    }
}
console.log(sum); 

// task 14
let sum1 = 0;
for (let i = 0; i < li.length; i++) {
    if (li[i] % 2 != 0) {
        sum1 += li[i];
    }
}
console.log(sum1);

// task 15
let sum2 = 0;
let sum3 = 0;
for (let i = 0; i < li.length; i++) {
    if (li[i] % 2 == 0) {
        sum2 += li[i];
    } else {
        sum3 += li[i];
    }
}
if (sum2 > sum3) {
    console.log(sum2 - sum3);
} else if (sum3 > sum2) {
    console.log(sum3 - sum2);
} else {
    console.log("Числа равны");
}
