$(document).ready(() => {
    function clickAnimation(button) {
        $(button).on("mousedown", function () {
            button.classList.add('service-config-dropdown__service-button_clicked');
        });
        $(button).on("mouseup", function () {
            button.classList.remove('service-config-dropdown__service-button_clicked');
        });
    }

    let service_namespace = '.service-config-dropdown__service';
    $(service_namespace).each(function () {

        let dropdown_els = {
            dropdown: this,
            lessButton: $(this).find(service_namespace + '-less-button')[0],
            moreButton: $(this).find(service_namespace + '-more-button')[0],
            value: $(this).find(service_namespace + '-value')[0],
        };

        //less button
        if (dropdown_els.value.textContent === '0') {
            dropdown_els.lessButton.setAttribute('disabled', '');
        }
        clickAnimation(dropdown_els.lessButton);
        $(dropdown_els.lessButton).on('click', () => {
            const button = dropdown_els.lessButton;
            if (+dropdown_els.value.textContent > 0) {
                if (dropdown_els.value.textContent === '1') {
                    button.setAttribute('disabled', '');
                }
                dropdown_els.value.textContent = +dropdown_els.value.textContent - 1;
            }
        });

        //more button
        clickAnimation(dropdown_els.moreButton)
        $(dropdown_els.moreButton).on('click', () => {
            const button = dropdown_els.moreButton;
            if (dropdown_els.value.textContent === '0') {
                dropdown_els.lessButton.removeAttribute('disabled');
            }
            dropdown_els.value.textContent = +dropdown_els.value.textContent + 1;
        });
    });
});