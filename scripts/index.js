const TODO_LIST = [
    { title: 'Съесть печеньку 🍪' },
    { title: 'Изучить React ⚛️' },
    { title: 'Полить цветы 🌸' },
    { title: 'Сделать свой сайт 👨‍💻' },
    { title: 'Погулять в парке 🌳' },
    { title: '<img src="v" onerror="alert(\'Ваш сайт взломан\')" />' },
];

const listContainerEl = document.querySelector('.todo__list');


function render() {
    const html = TODO_LIST
        .map(getItem)

    listContainerEl.append(...html);
}


function getItemHTML(item) {
    return `<li class="todo__item card">
                    <h2 class="card__title">${item.title}</h2>
                    <div class="card__actions">
                        <button type="button" class="button button_edit"></button>
                        <button type="button" class="button button_duplicate"></button>
                        <button type="button" class="button button_remove"></button>
                    </div>
                </li>`
}


function getItem(item) {
    const cardItem = document.createElement('li');
    cardItem.classList.add('todo__item', 'card');

    const cardHeader = document.createElement('h2');
    cardHeader.classList.add('card__title');
    cardHeader.textContent = item.title;

    const cardActions = document.createElement('div');
    cardActions.classList.add('card__actions');

    const editButton = document.createElement('button');
    editButton.classList.add('button', 'button_edit');

    const duplicateButton = document.createElement('button');
    duplicateButton.classList.add('button', 'button_duplicate');

    const removeButton = document.createElement('button');
    removeButton.classList.add('button', 'button_remove');

    cardActions.append(editButton, duplicateButton, removeButton);
    cardItem.append(cardHeader, cardActions);

    return cardItem;
}

render();
