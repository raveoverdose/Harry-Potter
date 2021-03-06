import {data} from './data.js'

//Объявляю переменную с контейнером для карточек (item)
const gridContainer = document.querySelector('.grid')


//Функция для создания карточки (item)
function createItem(picture, nameTitle, actor, gender, house, wand, alive) {
    let card = document.createElement('div');
    card.className = "card";

    let pictureContainer = document.createElement('div');
    pictureContainer.className = 'card__picture';
    card.append(pictureContainer)

    let pictureImg = document.createElement('div');
    pictureImg = new Image(334, 192)
    pictureImg.src = picture
    pictureImg.className = 'card__img';
    pictureContainer.append(pictureImg)

    let likeContainer = document.createElement('div')
    likeContainer.className = 'like__container'
    likeContainer.innerHTML = '<svg class="like__img empty">\n' +
        '  <use xlink:href="#empty-like"></use>\n' +
        '</svg>'
    card.append(likeContainer)

    let infoContainer = document.createElement('div');
    infoContainer = document.createElement('div')
    infoContainer.className = 'info';
    card.append(infoContainer)

    let cardTitle = document.createElement('h2');
    cardTitle.textContent = nameTitle;
    cardTitle.className = 'info__title';
    infoContainer.append(cardTitle)

    let cardActor = document.createElement('p');
    cardActor.textContent = `Actor: ${actor}`;
    infoContainer.append(cardActor)

    let cardGender = document.createElement('p');
    cardGender.textContent = `Gender: ${gender}`;
    infoContainer.append(cardGender)

    let cardHouse = document.createElement('p');
    cardHouse.textContent = `House: ${house}`;
    infoContainer.append(cardHouse)

    let cardWand = document.createElement('p');
    cardWand.textContent = `Wand core: ${wand}`;
    infoContainer.append(cardWand)

    let cardAliveStatus = document.createElement('p');
    cardAliveStatus.textContent = `Alive: ${alive ? 'yes' : 'no'}`;
    infoContainer.append(cardAliveStatus)

    // let like = document.querySelector('.like__container');

    likeContainer.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('empty')) {
            likeContainer.innerHTML = '<svg class="like__img">\n' +
                '  <use xlink:href="#like"></use>\n' +
                '</svg>'
            evt.target.classList.remove('empty')
        } else {
            likeContainer.innerHTML = '<svg class="like__img empty">\n' +
                '  <use xlink:href="#empty-like"></use>\n' +
                '</svg>'

        }
    })


    gridContainer.append(card)
}


//Отрисовка всех карточек из массива объектов (data)
data.forEach((item) => createItem(item.image, item.name, item.actor, item.gender, item.house, item.wand.core, item.alive))


//Сортировка по select
const inputSort = document.querySelector('#school')

function selectSort() {
    inputSort.addEventListener('change', () => {
        const newData = data.filter((item) => item.house.includes(inputSort.value));
        gridContainer.innerHTML = '';
        return newData.forEach((item) => createItem(item.image, item.name, item.actor, item.gender, item.house, item.wand.core, item.alive));
    })

}

selectSort() //Вызов функции сортировки по карточкам (item)


//Поиск по имени
const input = document.querySelector('#input')

function inputSearch() {
    input.addEventListener('input', () => {
        const inputValue = input.value;
        const newData = data
            .filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase().trim()))
            .filter((item) => item.house.includes(inputSort.value));
        gridContainer.innerHTML = '';
        return newData.forEach((item) => createItem(item.image, item.name, item.actor, item.gender, item.house, item.wand.core, item.alive));
    });
}

inputSearch() //Вызов функции поиска по карточкам (item)

//Отслеживание лайков
// const like = document.querySelectorAll('.like__container')

// for (let items of like) {
//     items.addEventListener('click', (evt) => {
//         if (evt.target.classList.contains('empty')) {
//             items.innerHTML = '<svg class="like__img">\n' +
//                 '  <use xlink:href="#like"></use>\n' +
//                 '</svg>'
//             evt.target.classList.remove('empty')
//         } else {
//             items.innerHTML = '<svg class="like__img empty">\n' +
//                 '  <use xlink:href="#empty-like"></use>\n' +
//                 '</svg>'
//
//         }
//     })
// }


