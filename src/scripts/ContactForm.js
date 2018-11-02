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
    let firstName = form.querySelector("#firstName").value
    let lastName = form.querySelector("#lastName").value
    let phone = form.querySelector("#phone").value
    let street = form.querySelector("#street").value
    let city = form.querySelector("#city").value
    let state = form.querySelector("#state").value
    let zip = form.querySelector("#zip").value

    // Put Data into Object
    let contact = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      address: {
        street: street,
        city: city,
        state: state,
        zip: zip
      }
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

