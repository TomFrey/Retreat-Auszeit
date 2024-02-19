import * as Crypto from './../utils/crypto.js'

const openMailClientButton = document.querySelector('.contact-mail-link');
const openWhatsAppButton = document.querySelector('.contact-whatsapp-link');

function init() {
    if (openMailClientButton !== null) {
        openMailClientButton.addEventListener('click', (event) => {
            //öffnet den Standard Mailclient
            Crypto.linkToUnCryptMailto('nbjmup;jogpAsfusfbu.bvt{fju/di');
        });
    }

    if (openWhatsAppButton !== null) {
        openWhatsAppButton.addEventListener('click', (event) => {
            //öffnet Whatsapp Chat
            Crypto.decryptLinkToMessenger('retreatAUSzeit', '4c505054571e0b0b53450a49410b1015131d131210161d121c');
        });
    }
}

export {
    init
};