import './__dropdown-services/service-config-dropdown__dropdown-services.js';
import './__text-field/service-config-dropdown__text-field.js';

$(document).ready(() => {
    function hoverFocusHandler(element, styleTarget) {
        styleTarget.borderChangeFactor = 0;
        $(element).on("mouseenter focus", () => {
            ++styleTarget.borderChangeFactor;
            styleTarget.style.borderColor = "rgba(31, 32, 65, 0.5)";
        });
        $(element).on("mouseleave blur", () => {
            --styleTarget.borderChangeFactor;
            if (styleTarget.borderChangeFactor == 0)
                styleTarget.style.borderColor = "rgba(31, 32, 65, 0.25)";
        });
    }

    let namespace = '.service-config-dropdown';
    document.querySelectorAll(namespace).forEach(dd => { //DropDown
        let ddServices = dd.querySelector(namespace + '__dropdown-services');
        $(ddServices).hide(0);

        ddServices.isOpened = false;
        dd.querySelector(namespace + '__text-field button').addEventListener('click', e => {
            if (ddServices.isOpened) {
                e.target.parentElement.style.borderColor = "";
            } else {
                e.target.parentElement.style.borderColor = "rgba(31, 32, 65, 0.5)";
            }
            ddServices.isOpened = !ddServices.isOpened;
            $(ddServices).slideToggle(1000);
        });
    })

    $(".subscription-text-field").each(function () { hoverFocusHandler(this, this); })
        .find("input").each(function () { hoverFocusHandler(this, this.parentElement); });
    $(".subscription-text-field button").each(function () {
        $(this).on("click", () => {
            alert('.subscription-text-field button clicked');
        });
    });
});