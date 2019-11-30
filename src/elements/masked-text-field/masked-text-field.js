export function maskAllMaskedTextFileds() {
    document.querySelectorAll("input.masked-text-field").forEach(el => {
        let innerInputmask = el.dataset.inputmask;
        if (innerInputmask) {
            let maskParts = innerInputmask.split(":");
            let mask = new Inputmask({
                [maskParts[0]]: maskParts[1]
            });
            mask.mask(el);
        }
    });
}