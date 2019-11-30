import Inputmask from "inputmask";
export function maskAllMaskedTextFileds() {
    let mask = new Inputmask('datetime', {
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'ДД.ММ.ГГГГ',
    });
    $("input.masked-text-field").each(function () {
        mask.mask(this);
    });
}