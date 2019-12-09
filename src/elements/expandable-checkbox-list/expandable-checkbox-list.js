$(document).ready(() => {
    let namespace = '.expandable-checkbox-list';

    $(namespace + '__header').each(function () {
        let button = this.lastElementChild;
        button.isOpened = false;
        $(this).click(e => {
            if (!button.isOpened) {
                button.classList.add(namespace.slice(1) + '__toggle-button_opened');
            } else {
                button.classList.remove(namespace.slice(1) + '__toggle-button_opened');
            }
            button.isOpened = !button.isOpened;
            $(button.parentElement.nextElementSibling).slideToggle(1000);
        });
    });
});