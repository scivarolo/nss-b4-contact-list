/* Will Import ContactList and ContactForm */

import ContactForm from "./ContactForm"

document.querySelector("#submit-form").addEventListener("click", (event) => {
  ContactForm.saveToDatabase(event);
});