/*
  A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
*/

import ContactCollection from "./ContactCollection"

const ContactForm = {
  saveToDb: (event) => {
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
    if(form.classList.contains("editing")) {
      // If editing a contact, PATCH exisiting data
      contact.id = form.getAttribute("data-contact")
      form.removeAttribute("class")
      form.removeAttribute("data-contact")
      return ContactCollection.PATCH(contact.id, contact, form)
    } else {
      // If its a new contact, POST data to Database
      return ContactCollection.POST(contact, form)
    }
  },
  edit: (contact) => {
    let form = document.querySelector("#contact-form")
    let firstName = form.querySelector("#firstName")
    let lastName = form.querySelector("#lastName")
    let phone = form.querySelector("#phone")
    let street = form.querySelector("#street")
    let city = form.querySelector("#city")
    let state = form.querySelector("#state")
    let zip = form.querySelector("#zip")

    firstName.value = contact.firstName
    lastName.value = contact.lastName
    phone.value = contact.phone
    street.value = contact.address.street
    city.value = contact.address.city
    state.value = contact.address.state
    zip.value = contact.address.zip

    // Add a way to check if the form is editing and not creating a new contact
    form.className = "editing"
    form.setAttribute("data-contact", contact.id)
  }
}

export default ContactForm

