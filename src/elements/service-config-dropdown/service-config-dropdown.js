import './__dropdown-services/service-config-dropdown__dropdown-services.js';
import './__text-field/service-config-dropdown__text-field.js';

$(document).ready(() => {
    let namespace = '.service-config-dropdown';
    document.querySelectorAll(namespace).forEach(dd => { //DropDown
        let dd_services = dd.querySelector(namespace + '__dropdown-services');
        $(dd_services).hide(0);

        dd.querySelector(namespace + '__text-field button').addEventListener('click', e => {
            $(dd_services).slideToggle(1000);
        });
    })
});