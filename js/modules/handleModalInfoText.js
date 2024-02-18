const dialog = document.querySelector('dialog.modal-detail-info');
const modalCloseButton = document.querySelector('.modal-detail-info-close-button');
const  openModalButtons = document.querySelectorAll('.openModalWithInfoText');

function init() {
    if (modalCloseButton !== null) {
        modalCloseButton.addEventListener('click', (event) => {
            dialog.close();
        });
    }

    if (openModalButtons !== null) {
        openModalButtons.forEach((openModalButton) => {
            openModalButton.addEventListener('click', (event) => {
                //toggleModal(event.target);
                dialog.showModal();
            });
        });
    }
}


export {
    init
};
