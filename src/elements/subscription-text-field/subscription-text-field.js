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
    $(".subscription-text-field").each(function () { hoverFocusHandler(this, this); })
        .find("input").each(function () { hoverFocusHandler(this, this.parentElement); });
    $(".subscription-text-field button").each(function () {
        $(this).on("click", () => {
            alert('.subscription-text-field button clicked');
        });
    });
});