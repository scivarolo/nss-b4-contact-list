/* Will Import ContactList and ContactForm */

import ContactForm from "./ContactForm"
import ContactList from "./ContactList"
import ContactCollection from "./ContactCollection";

// Add Event Listener to submit button

document.querySelector("#submit-form").addEventListener("click", (event) => {
  // ContactForm.saveToDbThenOutput(event)
  ContactForm.saveToDb(event)
  .then(() => ContactCollection.GET())
  .then(contacts => {
    let list = ContactList.build(contacts)
    let existing = document.querySelectorAll(".contact-card")
    existing.forEach(card => {
      card.remove()
    })
    ContactList.output(list)
  })
});

// Populate the contact list on page load

ContactCollection.GET()
  .then(contacts => {
    let list = ContactList.build(contacts)
    ContactList.output(list)
  })