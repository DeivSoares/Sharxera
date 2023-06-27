let btn = document.querySelector('button.btn-mobile');
let options = document.querySelector('ul#list');

btn.addEventListener('click', function () {
    menu()
});

options.addEventListener('click', function () {
    menu();
});

function menu() {
    let menu = document.querySelector('div.flexlist-menu');

    if (menu.classList.contains('opened')) {
        menu.classList.remove('opened');
    } else {
        menu.classList.add('opened');
    }
}