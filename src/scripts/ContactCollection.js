/*
  A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
*/

const ContactCollection = {
  url: "http://localhost:8088/contacts",
  GET() {
    return fetch(`${this.url}/?_sort=lastName,firstName&_order=asc`)
      .then(response => response.json())
  },
  POST(contact, form) {
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
  DELETE(id) {
    return fetch(this.url + "/" + id, {
      method: "DELETE"
    }).then(response => console.log(response))
  }
}

export default ContactCollection