import ContactCollection from "./ContactCollection";
import ContactForm from "./ContactForm";

/*
  A Contact component that displays a person's name, phone number, and address.
  Contact.buildEl() builds elements that are combined in Contact.buildCard()
*/

const Contact = {
  /*
    Element factory to build HTML elements.
    Returns an element
  */
  buildEl(el, attrObj, content, ...children) {
    // HTML Element Factory
    let element = document.createElement(el)
    for(let attr in attrObj) {
      element.setAttribute(attr, attrObj[attr])
    }
    element.textContent = content || null
    children.forEach((child) => {
      element.appendChild(child)
    })
    return element
  },

  /*
    Uses this.buildEl to put together a contact card.
    This includes event listeners for edit and delete buttons
    Returns a document fragment to pass to ContactList.build()
  */
  buildCard(contact) {
    let fragment = document.createDocumentFragment()
    let nameEl = this.buildEl("h2", {class: "contact__name"}, `${contact.firstName} ${contact.lastName}`)
    let phoneEl = this.buildEl("p", {class: "contact__phone"}, contact.phone)
    let streetEl = this.buildEl("p", {class:"address__street"}, contact.address.street)
    let cityStZipEl = this.buildEl("p", {class: "address__cityStZip"}, `${contact.address.city}, ${contact.address.state} ${contact.address.zip}`)
    let addressEl = this.buildEl("div", {class: "contact__address"}, null, streetEl, cityStZipEl)

    let editButton = this.buildEl("button", {class:"contact__edit"}, "Edit")
    editButton.addEventListener("click", event => {
      let id = event.target.parentNode.parentNode.getAttribute("data-contact")
      ContactCollection.GET(id)
        .then(response => ContactForm.edit(response))
    })

    let deleteButton = this.buildEl("button", {class:"contact__delete"}, "Delete")
    deleteButton.addEventListener("click", () => {
      ContactCollection.deleteContact(contact.id)
        .then(() => document.querySelector(`#contact-${contact.id}`).remove())
    })

    let buttons = this.buildEl("div", {class: "contact__buttons"}, null, editButton, deleteButton)

    let wrapper = this.buildEl("article", {"data-contact": contact.id, class: "contact-card", id: `contact-${contact.id}`}, null, nameEl, phoneEl, addressEl, buttons)
    fragment.appendChild(wrapper)
    return fragment
  }

}

export default Contact