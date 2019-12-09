$(document).ready(() => {
    let namespace = '.checkbox';
    $(namespace + ' label').each(function () {
        $(this).click(e => {
            this.previousElementSibling.checked = !this.previousElementSibling.checked
        });
    });
});