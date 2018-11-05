/*
  ContactCollection contains methods for interacting with the contacts database.

  ContactCollection.getContacts: Get everything sorted by last name, or if an ID is passed, only retrieve that item.

  ContactCollection.saveContact: Take form data and add to database, then if successful clear the form.

  ContactCollection.DELETE: Deletes a contact form the database

  ContactCollection.PATCH: Edits a contact, and clears the form
*/

const ContactCollection = {
  url: "http://localhost:8088/contacts",
  getContacts(id) {
    if(id) {
      return fetch(`${this.url}/${id}`)
        .then(response => response.json())
    } else {
    return fetch(`${this.url}/?_sort=lastName,firstName&_order=asc`)
      .then(response => response.json())
    }
  },
  saveContact(contact, form) {
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    }).then(response => {
      if(response.ok) {
        alert("Contact was successfully saved to Database.")
        form.reset()
      } else {
        alert("Something went wrong. Try again!")
      }
      return response.json()
    })
  },
  deleteContact(id) {
    return fetch(this.url + "/" + id, {
      method: "DELETE"
    }).then(response => console.log(response))
  },
  updateContact(id, contact, form) {
    return fetch(this.url + "/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    }).then((response) => {
      if(response.ok) {
        alert("Contact was successfully edited")
      } else {
        alert("Something went wrong. Try again!")
      }
      form.reset()
    })
  }
}

export default ContactCollection