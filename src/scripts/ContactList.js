/*
  A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component
*/
import Contact from "./Contact"

const ContactList = {

  build(contacts) {
    let fragment = document.createDocumentFragment()
    contacts.forEach(contact => {
      fragment.appendChild(Contact.buildCard(contact))
    })
    return fragment
  },
  output(list) {
    let listSection = document.querySelector("#contact-list")
    listSection.appendChild(list)
  }
}

export default ContactList