import $$ from 'jquery';
function setupMasks() {
    $(document).ready(function () {
        $$('input.masked-text-field').forEach(el => new Inputmask().mask(el));
    });
}

export { setupMasks };