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
        let header = ddServices.previousElementSibling;
        $(ddServices).hide(0);

        dd.isOpened = false;
        dd.expand = e => {
            header.style.borderColor = "rgba(31, 32, 65, 0.5)";
            dd.isOpened = true;
            $(ddServices).slideDown(1000);
        };
        dd.collapse = e => {
            header.style.borderColor = "";
            dd.isOpened = false;
            $(ddServices).slideUp(1000);
        };
        dd.toggle = e => {
            if (dd.isOpened) {
                dd.collapse();
            } else {
                dd.expand();
            }
        };
        dd.querySelector(namespace + '__text-field button').addEventListener('click', dd.toggle);
    });
});