import * as Crypto from './../utils/crypto.js'
import { sendFormDataToServer } from './../services/sendMail.js'

const openMailClientButton = document.querySelector('.contact-mail-link');
const openWhatsAppButton = document.querySelector('.contact-whatsapp-link');
const form = document.querySelector('.contact-form-form');

function sendFormData() {
    contactFormData.subject = 'Anfrage von Retreat-Auszeit';
    contactFormData.name = firstNameInputField.value;
    contactFormData.email = emailInputField.value;
    contactFormData.message = messageInputField.value;

    sendFormDataToServer(contactFormData)
        .then(() => {
            // Die Formular Daten konnten vom Server entgegengenommen werden, ein EMail wurde verschickt...
            resetFormularData();
            setContactFormInvalid();
            setInfoBoxToSuccess();
        })
        .catch((error) => {
            console.log(error);
            console.log('Fehlermeldung: ' + error.jow_message);
            // TODO: Dem Benutzer einer Fehlermeldung auf's GUI rendern.
        });
}





async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);

  try {
    const response = await fetch('http://localhost:5173/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      // Set the FormData instance as the request body
      body: JSON.stringify(formData),
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}





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

    // Take over form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        sendData();
    });
  
}

export {
    init
};