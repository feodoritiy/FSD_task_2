import Inputmask from "inputmask";
export function maskAllMaskedTextFileds() {
    let mask = new Inputmask('datetime', {
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'ДД.ММ.ГГГГ',
    });
    document.querySelectorAll("input.masked-text-field").forEach(el => {
        mask.mask(el);
    });
}