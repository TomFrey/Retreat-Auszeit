
import { ajaxCall } from './ajaxCalls.js'

function sendFormDataToServer(formData) {
    return ajaxCall('POST', '/api/mail.php', formData);
}


export {
    sendFormDataToServer
};
