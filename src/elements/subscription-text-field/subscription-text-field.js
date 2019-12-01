export function handleSubscriptionTextFieldButtonsClick() {
    $(document).ready(() => {
        $(".subscription-text-field button").each(function () {
            $(this).on("click", () => {
                alert('.subscription-text-field button clicked');
            });
        });
    });
}