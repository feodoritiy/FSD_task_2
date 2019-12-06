$(document).ready(() => {
    let namespace = '.service-config-dropdown';

    $(namespace + '__text-field input').on('click', e => {
        let el = $(namespace + '__dropdown-services');
        el[0].isOpened = true;
        el.slideDown(1000);
    });

    let outputTextField = $(namespace + '__text-field input')[0];
    console.log(outputTextField);
    outputTextField.services = []; //[{names:[],value}, {names:[],value}]

    outputTextField.services.define = function (service) {
        let target = null;
        for (let i = 0; i < this.length; i++) {
            if (this[i].names[0] == service.names[0]) {
                target = i;
                break;
            }
        }
        if (target === null)
            this.push(service);
        else
            this[target] = service;
    };

    outputTextField.services.drop = function (service) {
        let target = null;
        for (let i = 0; i < this.length; i++) {
            if (this[i].names[0] == service.names[0]) {
                target = i;
                break;
            }
        }
        if (target !== null)
            this.splice(target, 1);
    }

    outputTextField.render = function () {
        let servicesStrings = [];

        this.services.forEach((service, index) => {
            let serviceValueStr = service.value.toString();
            let serviceSelectedName;

            if (serviceValueStr.endsWith('1') && !serviceValueStr.endsWith('11')) {
                serviceSelectedName = service.names[1];
            } else if
                (serviceValueStr.endsWith('2') && !serviceValueStr.endsWith('12') ||
                serviceValueStr.endsWith('3') && !serviceValueStr.endsWith('13') ||
                serviceValueStr.endsWith('4') && !serviceValueStr.endsWith('14')) {
                serviceSelectedName = service.names[2];
            } else { //0, 5-19
                serviceSelectedName = service.names[0];
            }

            servicesStrings.push(`${service.value} ${serviceSelectedName.toLowerCase()}`);
        });

        this.value = servicesStrings.join(", ");
    }

    $(namespace).each(function () {
        let namespaceParent = this;

        $(namespace + '__service-value', namespaceParent).each(function () {
            this.onAfterChange = (dropdownElements) => {
                let service = {
                    names: [
                        dropdownElements.value.dataset.serviceFor0,
                        dropdownElements.value.dataset.serviceFor1,
                        dropdownElements.value.dataset.serviceFor2,
                    ],
                    value: +dropdownElements.value.textContent,
                };
                if (service.value > 0)
                    outputTextField.services.define(service);
                else
                    outputTextField.services.drop(service);
                outputTextField.render();
            }
        });
    });
});