// ex1
const title = document.querySelector('.header__title');
const toggleButton = document.querySelector('.header__button');
toggleButton.addEventListener('click', () => {
    if (title.style.display === 'none') {
        title.style.display = 'block';
        toggleButton.textContent = 'Скрыть';
    } else {
        title.style.display = 'none';
        toggleButton.textContent = 'Показать';
    }
});

// ex2
const paragraph = document.querySelector('.content__text');
const colorButton = document.querySelector('.content__button');
colorButton.addEventListener('click', () => {
    paragraph.style.color = 'blue';
});

// ex3
const changeTextButton = document.querySelector('.header__change-text-button');
changeTextButton.addEventListener('click', () => {
    title.textContent = 'Привет, мир!';
});

// ex4
const descriptionElements = document.querySelectorAll('.paragraphs .description');
descriptionElements.forEach((element) => {
    element.textContent = 'Измененный текст';
});

// ex5
const queryDescriptionElements = document.querySelectorAll('.query-elements .description');
queryDescriptionElements.forEach((element) => {
    element.textContent = 'Новый текст';
});

// ex6
const addButton = document.querySelector('.add-element__button');
addButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.className = 'new-paragraph';
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

// ex7
const removeButton = document.querySelector('.remove-element__button');
removeButton.addEventListener('click', () => {
    const firstDescription = document.querySelector('.description');
    if (firstDescription) {
        firstDescription.remove();
    } else {
        console.log('Элементов с классом "description" больше нет.');
    }
});
