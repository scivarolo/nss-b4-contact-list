/*
  ContactList contains methods for building and outputting the contact list

  ContactList.build() combines the elements from Contact.buildCard() into one fragment

  ContactList.output() takes the fragment from Contactlist.build() and appends it to the DOM.
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