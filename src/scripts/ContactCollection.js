/*
  A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
*/

const ContactCollection = {
  url: "http://localhost:8088/contacts",
  GET() {
    return fetch(this.url)
      .then(response => response.json())
  },
  POST(contact) {
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    })
  }
}

export default ContactCollection