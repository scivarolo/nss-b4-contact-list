/*
  A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
*/

import ContactCollection from "./ContactCollection"

const ContactForm = {
  saveToDatabase: (event) => {
    // Get Data from Form
    event.preventDefault()

    // TODO: Add additional fields
    let form = document.querySelector("#contact-form")
    let contactName = form.querySelector("#name").value

    // Put Data into Object
    let contact = {
      name: contactName
    }

    // POST data to Database
    ContactCollection.POST(contact)
      .then(alert("Contact was successfully saved to Database."));
  }
}

export default ContactForm

