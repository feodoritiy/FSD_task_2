import Inputmask from "inputmask";
let mask = new Inputmask('datetime', {
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
});
$("input.masked-text-field").each(function () {
    mask.mask(this);
});