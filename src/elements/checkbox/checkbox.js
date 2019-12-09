$(document).ready(() => {
    let namespace = '.checkbox';
    $(namespace + ' label').each(function () {
        $(this).click(e => {
            if (e.target.previousElementSibling.hasAttribute('checked')) {
                e.target.previousElementSibling.removeAttribute('checked');
            } else {
                e.target.previousElementSibling.setAttribute('checked', '');
            }
        });
    });
});