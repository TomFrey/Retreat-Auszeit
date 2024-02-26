const subPageCloseButtons = document.querySelectorAll('.page-close-button, .impressum-close-button');

function init() {
    if (subPageCloseButtons !== null) {
        subPageCloseButtons.forEach((subPageCloseButton) => {
            subPageCloseButton.addEventListener('click', (event) => {
                window.history.back();
            });
        });
    }
}

export {
    init
};
