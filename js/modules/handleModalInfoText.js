//const OPEN_OVERLAY = 'js-openOverlayDetail';
const dialog = document.querySelector('dialog.modal-detail-info');
const modalCloseButton = document.querySelector('.modal-detail-info-close-button');
const  openModalButtons = document.querySelectorAll('.openModalWithInfoText');

// function toggleModal(event) {
//     console.log('overlay geöffnet ' + event);
//     overlay.classList.toggle(OPEN_OVERLAY);
// }

// function closeModal(event) {
//     toggleModal(event.target);
// }

function init() {
    if (modalCloseButton !== null) {
        modalCloseButton.addEventListener('click', (event) => {
            dialog.close();
        });
    }

    //open modal with info text
   // openModalButtons = document.querySelectorAll('.openModalWithInfoText');
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
