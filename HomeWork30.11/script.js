let header = document.createElement('header');
let script = document.querySelector('script');
script.before(header);

let h1 = document.createElement('h1');
header.append(h1);
h1.innerText = "Дополнительное задание от 30.11";
h1.style.textAlign = "center";

/* task 1
    Написать программу, которая формирует на основе массива строк множество параграфов и 
    выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На 
    данном этапе делать процесс обратимым при повторном клике необязательно. 
*/

let block_1 = document.createElement('div');
script.before(block_1);
block_1.style.margin = "50px"

let h2 = document.createElement('h2');
block_1.append(h2);
h2.innerText = "Задача № 1"

let array = ["Lorem ipsum dolor sit amet", "consectetur adipisicing elit", "Illum deleniti doloribus doloremque placeat quo delectus", "blanditiis reiciendis obcaecati nostrum asperiores dolorum", "facilis provident laborum eaque laudantium vel", "repellendus ex assumenda"];

for (let i = 0; i < array.length; i++) {
    let paragraph = document.createElement('p');
    paragraph.innerText = array[i];
    block_1.append(paragraph);
    paragraph.addEventListener("click", mouseClick);

    function mouseClick() {
        paragraph.innerText = "*";
        paragraph.addEventListener("click", mouseClick_2);

        function mouseClick_2() {
            paragraph.innerText = array[i];
        }
    }
}

/* task 2, 3
    2. Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить 
    ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего 
    фона местами. 
    3. Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active 
    удалялся. 
*/

let block_2 = document.createElement('div');
script.before(block_2);
block_2.className = "block_2";

let h2_2 = document.createElement('h2');
block_2.append(h2_2);
h2_2.innerText = "Задача № 2, 3";
block_2.style.margin = "0 50px";

let count = 0;
while (count < 10) {
    let card = document.createElement('div');
    card.innerText = count;
    card.style.display = "inline-block";
    card.style.margin = "15px 15px";
    card.style.padding = "20px";
    card.style.boxSizing = "border-box";
    card.style.width = "50px";
    card.style.height = "100px";
    card.style.border = "1px solid black";

    block_2.append(card);
    count++;
}

let div = document.querySelectorAll('.block_2 > div');
for (let elem of div) {
    elem.addEventListener("click", clickCard);
    
    function clickCard() {
        elem.classList.add("active");
        let active = document.querySelector(".active");
        active.style.backgroundColor = "black";
        active.style.color = "white";

        elem.addEventListener("click", clickDelete);

        function clickDelete() {
            elem.classList.contains("active");
            if (elem) {
                elem.classList.remove("active");
                active.style.backgroundColor = "white";
                active.style.color = "black";
            }
        }
    }
}
/* for (let elem of div) {
    elem.addEventListener("click", clickCard);

    function clickCard() {
        elem.classList.add("active");
        elem.style.backgroundColor = "black";
        elem.style.color = "white";

        elem.addEventListener("click", clickDelete);

        function clickDelete() {
            elem.classList.contains("active");
            if (elem) {
                elem.classList.remove("active")
                elem.style.backgroundColor = "white";
                elem.style.color = "black";
            }
        }
    }
} */

/* task 4
    В js объявлен массив с ссылками на картинки. На основе этого массива формируется 
    множество маленьких картинок в верхней части интерфейса. При нажатии на одну из 
    картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в 
    большем размере. Так, пользователь, нажимая на маленькие картинки видит их отображение 
    в большем размере. 
*/

let block_3 = document.createElement('div');
script.before(block_3);

let h2_3 = document.createElement('h2');
block_3.append(h2_3);
h2_3.innerText = "Задача № 4";
block_3.style.margin = "50px";

let img = ['https://th.bing.com/th/id/R.f6acdced659bd27434d7a6ea8c315be2?rik=dZLfq6iYp%2bcsRg&pid=ImgRaw&r=0&sres=1&sresct=1', 'https://th.bing.com/th/id/R.0cd5873429fcb83e11057bd570b6823f?rik=WVEGo5lJVg3hSw&pid=ImgRaw&r=0', 'https://th.bing.com/th/id/R.1e60f738eae8f16271e85fd2dc1fb1b1?rik=DOPAMZkJ9RycKg&riu=http%3a%2f%2ftajcsi.qwqw.hu%2ftarhely%2ftajcsi%2fkepek%2fa21.gif&ehk=0Tu22QBebxlrX01dkYnyeHu825JHKsrp5tlZA4eJr6o%3d&risl=&pid=ImgRaw&r=0', 'https://god2021bull.com/wp-content/uploads/2021/01/otkrytki-s-rozhdestvom-hristovym12.jpg', 'https://th.bing.com/th/id/R.0aea7a9b2d198f9cf116c2883e3efec8?rik=FyfLkmY%2fXV%2b4ag&pid=ImgRaw&r=0', 'https://th.bing.com/th/id/R.5d182a35aab08a76de67cf709024cfee?rik=zVRDOt%2bO9Jpw5w&riu=http%3a%2f%2fbestgif.ru%2f_ph%2f51%2f2%2f825757761.gif&ehk=J0%2f8xMQcOA1xcA7h22Ln42RspW4ykw3nb6Cz1qW0asw%3d&risl=&pid=ImgRaw&r=0'];

let divImg = document.createElement('div');
block_3.append(divImg);

let divImgBig = document.createElement('div');
block_3.append(divImgBig);

let imges_2 = document.createElement('img');
divImgBig.append(imges_2);

for (let i = 0; i < img.length; i++) {

    let imges = document.createElement('img');
    divImg.append(imges);
    imges.style.display = 'inline-block';
    imges.setAttribute('src', img[i]);
    imges.setAttribute('alt', "img");
    imges.style.width = "50px";
    imges.style.height = "50px";
    imges.style.margin = "10px";

    imges.addEventListener("click", mouseImg);

    function mouseImg() {
        let adres = imges.getAttribute('src');
        
        imges_2.setAttribute('src', adres);
        imges_2.style.width = "500px";
        imges_2.style.height = "450px";
        imges_2.style.display = 'inline-block';
        imges_2.style.marginRight = "30px";
        imges_2.style.marginTop = "20px";
    }
}

/* task 5, 6
    5. Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово 
    на английском, а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на 
    которые слова с русского меняются на английский и обратно.  
    Подсказка. В каждой карточке должно быть два параграфа. В одном написано на русском, а 
    во втором на английском и при нажатии на карточку один параграф получает класс с 
    display none а второй с display block.
    6. Добавить внизу кнопки RU и EN при нажатии на которые все карточки переключаются на 
    русский или английский соответственно. 
*/

let block_4 = document.createElement('div');
script.before(block_4);

let h2_4 = document.createElement('h2');
block_4.append(h2_4);
h2_4.innerText = "Задача № 5, 6";
block_4.style.margin = "0 50px";

let array_2 = [];
array_2[0] = {
    en: "hello",
    ru: "привет"
}
array_2[1] = {
    en: "love the mountains",
    ru: "люблю горы"
}
array_2[2] = {
    en: "I'll program",
    ru: "прогаммирую"
}

for (let i = 0; i < array_2.length; i++) {
    let object = document.createElement('div');
    object.className = "object" + i;
    object.style.display = "inline-block";
    object.style.margin = "15px 15px";
    object.style.padding = "20px";
    object.style.boxSizing = "border-box";
    object.style.width = "200px";
    object.style.height = "300px";
    object.style.border = "1px solid black";
    block_4.append(object);

    let p1 = document.createElement('p');
    p1.innerText = array_2[i].en;
    object.append(p1);
    let p2 = document.createElement('p');
    p2.innerText = array_2[i].ru;
    object.append(p2);
    object.addEventListener("click", cardMouse);

    function cardMouse() {
        p1.innerText = array_2[i].ru;
        p2.innerText = array_2[i].en;
        object.addEventListener("click", cardMouse_2);

        function cardMouse_2() {
            p1.innerText = array_2[i].en;
            p2.innerText = array_2[i].ru;
        }
    }
}

let object_2 = document.createElement('div');
object_2.style.marginBottom = "50px";
block_4.append(object_2);

let buttonEn = document.createElement('button');
object_2.append(buttonEn);
buttonEn.innerText = "EN";
buttonEn.style.marginLeft = "30px";
buttonEn.style.marginRight = "30px";
buttonEn.style.marginTop = "40px";
buttonEn.style.width = "70px";
buttonEn.style.height = "30px";
buttonEn.style.borderRadius = "40%";

let buttonRu = document.createElement('button');
object_2.append(buttonRu);
buttonRu.innerText = "RU";
buttonRu.style.width = "70px";
buttonRu.style.height = "30px";
buttonRu.style.borderRadius = "40%";

for (let i = 0; i < array_2.length; i++) {
    buttonEn.addEventListener("click", clickButtonEn);

    function clickButtonEn() {
        let button = document.querySelectorAll('.object0 > p');
        for (let elem of button) {
            elem.innerText = array_2[0].en;
        }
        let button_2 = document.querySelectorAll('.object1 > p');
        for (let elem of button_2) {
            elem.innerText = array_2[1].en;
        }
        let button_3 = document.querySelectorAll('.object2 > p');
        for (let elem of button_3) {
            elem.innerText = array_2[2].en;
        }
    }

    buttonRu.addEventListener("click", clickButtonRu);

    function clickButtonRu() {
        let button = document.querySelectorAll('.object0 > p');
        for (let elem of button) {
            elem.innerText = array_2[0].ru;
        }
        let button_2 = document.querySelectorAll('.object1 > p');
        for (let elem of button_2) {
            elem.innerText = array_2[1].ru;
        }
        let button_3 = document.querySelectorAll('.object2 > p');
        for (let elem of button_3) {
            elem.innerText = array_2[2].ru;
        }
    }
}