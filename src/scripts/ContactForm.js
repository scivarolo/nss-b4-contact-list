/*
  A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
*/

import ContactCollection from "./ContactCollection"
import ContactList from "./ContactList"
import Contact from "./Contact"

const ContactForm = {
  saveToDbThenOutput: (event) => {
    // Get Data from Form
    event.preventDefault()

    // TODO: Add additional fields
    let form = document.querySelector("#contact-form")
    let contactName = form.querySelector("#name").value
    let contactPhone = form.querySelector("#phone").value
    let contactAddress = form.querySelector("#address").value

    // Put Data into Object
    let contact = {
      name: contactName,
      phone: contactPhone,
      address: contactAddress
    }

    // POST data to Database
    ContactCollection.POST(contact, form)
      .then((newContact) => {
        let newContactCard = Contact.buildCard(newContact)
        ContactList.output(newContactCard)
      })
  }
}

export default ContactForm

