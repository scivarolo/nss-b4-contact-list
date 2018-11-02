/* Will Import ContactList and ContactForm */

import ContactForm from "./ContactForm"
import ContactList from "./ContactList"
import ContactCollection from "./ContactCollection";

document.querySelector("#submit-form").addEventListener("click", (event) => {
  ContactForm.saveToDbThenOutput(event)
});

ContactCollection.GET()
  .then(contacts => {
    let list = ContactList.build(contacts)
    ContactList.output(list)
  })