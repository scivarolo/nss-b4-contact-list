import ContactCollection from "./ContactCollection";

/*
  A Contact component that displays a person's name, phone number, and address.
*/

const Contact = {
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
  buildCard(contact) {
    let fragment = document.createDocumentFragment()
    let nameEl = this.buildEl("h2", {class: "contact__name"}, contact.name)
    let phoneEl = this.buildEl("p", {class: "contact__phone"}, contact.phone)
    let addressEl = this.buildEl("p", {class:"contact__address"}, contact.address)
    let deleteButton = this.buildEl("button", {class:"contact__delete"}, "Delete Contact")
    deleteButton.addEventListener("click", event => {
      ContactCollection.DELETE(contact.id)
        .then(() => document.querySelector(`#contact-${contact.id}`).remove())
    })
    let wrapper = this.buildEl("article", {class: "contact-card", id: `contact-${contact.id}`}, null, nameEl, phoneEl, addressEl, deleteButton)
    fragment.appendChild(wrapper)
    return fragment
  }
}

export default Contact