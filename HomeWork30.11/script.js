/* task 1
    Написать программу, которая формирует на основе массива строк множество параграфов и 
    выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На 
    данном этапе делать процесс обратимым при повторном клике необязательно. 
*/
let array = ["Lorem ipsum dolor sit amet", "consectetur adipisicing elit", "Illum deleniti doloribus doloremque placeat quo delectus", "blanditiis reiciendis obcaecati nostrum asperiores dolorum", "facilis provident laborum eaque laudantium vel", "repellendus ex assumenda"];

for (let i = 0; i < array.length; i++) {
    let paragraph = document.createElement('p');
    paragraph.innerText = array[i];
    let script = document.querySelector('script')
    script.before(paragraph);
    paragraph.addEventListener("click", mouseClick);
    function mouseClick() {
        paragraph.innerText = '*';
    }
}


/* task 2, 3
    2. Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить 
    ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего 
    фона местами. 
    3. Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active 
    удалялся. 
*/

let count = 0;
while (count < 10) {
    let card = document.createElement('div');
    card.innerText = count;
    card.style.display = "inline-block";
    card.style.margin = "15px 15px";
    card.style.padding = "20px";
    card.style.boxSizing = "border-box"
    card.style.width = "50px";
    card.style.height = "100px";
    card.style.border = "1px solid black";

    let script = document.querySelector('script')
    script.before(card);
    count++;
}

let div = document.querySelectorAll('div');

for (let elem of div) {
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
}


/* task 4
    В js объявлен массив с ссылками на картинки. На основе этого массива формируется 
    множество маленьких картинок в верхней части интерфейса. При нажатии на одну из 
    картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в 
    большем размере. Так, пользователь, нажимая на маленькие картинки видит их отображение 
    в большем размере. 
*/

let img = ['https://th.bing.com/th/id/R.0c1e52d97899a46964f85ae3a901effc?rik=Y7aM3d1OO2iJzg&riu=http%3a%2f%2fdrasler.ru%2fwp-content%2fuploads%2f2018%2f06%2f%d0%9a%d1%80%d0%b0%d1%81%d0%b8%d0%b2%d1%8b%d0%b5-%d0%b8-%d0%bf%d1%80%d0%b8%d0%ba%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%ba%d0%b0%d1%80%d1%82%d0%b8%d0%bd%d0%ba%d0%b8-%d0%bf%d1%82%d0%b8%d1%86-%d0%bd%d0%b0-%d0%b7%d0%b0%d1%81%d1%82%d0%b0%d0%b2%d0%ba%d1%83-%d1%82%d0%b5%d0%bb%d0%b5%d1%84%d0%be%d0%bd%d0%b0-%d1%81%d0%b1%d0%be%d1%80%d0%ba%d0%b0-22.jpg&ehk=a%2b6DpbcpfHBiDMwJaxuVWm7xscoCZITu0lS4%2bDzBZeQ%3d&risl=&pid=ImgRaw&r=0', 'https://live.staticflickr.com/5213/5441565397_a2319a6edc_n.jpg', 'https://th.bing.com/th/id/OIP.bTqNQVJSEqaA0EO5PM-gHwAAAA?pid=ImgDet&rs=1', 'https://th.bing.com/th/id/OIP.Z2KrjpV1_bdkLKVyPQPVKQAAAA?pid=ImgDet&w=170&h=226&c=7&dpr=1,3', 'https://i.pinimg.com/236x/88/f5/94/88f594fc3b8e643b0c633153ae522b97--purple-christmas-christmas-art.jpg'];

for (let i = 0; i < img.length; i++) {
    

    let div = document.createElement('div');
    div.style.display = 'inline-block';
    
    let imges = document.createElement('img');
    div.append(imges);
    

    imges.setAttribute('src', img[i])
    imges.setAttribute('alt', "img");

    imges.style.display = "inline-block";
    imges.style.width = "50px";
    imges.style.height = "50px";
    imges.style.margin = "10px";
    
    let script = document.querySelector('script')
    script.before(div);


    imges.addEventListener("click", mouseImg);

    function mouseImg() {
        let adres = imges.getAttribute('src');
        console.log(adres);

        let div = document.createElement('div');
        div.style.paddingTop = "100px";

        let script = document.querySelector('script')
        script.before(div);

        let imges2 = document.createElement('img');
        div.append(imges2);

        imges2.setAttribute('src', adres);
        imges2.style.width = "400px";
        imges2.style.height = "300px";
    }
}


/* task 5
    Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово 
    на английском, а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на 
    которые слова с русского меняются на английский и обратно.  
    Подсказка. В каждой карточке должно быть два параграфа. В одном написано на русском, а 
    во втором на английском и при нажатии на карточку один параграф получает класс с 
    display none а второй с display block.
*/

let array_2 = [];
array_2[0] = {
    en: "hello",
    ru: "привет"
}
array_2[1] = {
    en: "hello",
    ru: "привет"
}
array_2[2] = {
    en: "hello",
    ru: "привет"
}

for (let i = 0; i < array_2.length; i++) {
    let object = document.createElement('div');

    object.style.display = "inline-block";
    object.style.margin = "15px 15px";
    object.style.padding = "20px";
    object.style.boxSizing = "border-box"
    object.style.width = "50px";
    object.style.height = "100px";
    object.style.border = "1px solid black";

    let script = document.querySelector('script')
    script.before(object);
}

