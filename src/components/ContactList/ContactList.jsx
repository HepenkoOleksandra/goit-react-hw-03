import Contact from "../Contact/Contact"


const ContactList = ({contacts}) => {
  return (
      <ul>
          {contacts.map((contact) => {
              return <Contact key={contact.id} contact={contact} />
        })}  
      </ul>
  )
}

export default ContactList