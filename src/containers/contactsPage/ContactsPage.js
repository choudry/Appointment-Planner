import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicateName, setDuplicateName] = useState(false)
 const contacts = props.contacts;

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (name == '' || phone == '' || email == '') {
    alert('Input field missing..!')
    return
   }

   if(duplicateName === true) {
    alert('Duplicate name..!')
    return
   }
   props.addContact({
    Name: name,
    Phone: phone,
    Email: email
   });

   setName('');
   setPhone('');
   setEmail('');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
  const result = contacts.find((contact) => contact.Name === name);
  if (result !== undefined) {
    setDuplicateName(true)
  } else {
    setDuplicateName(false);
  }
 }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
         />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={contacts} />
      </section>
    </div>
  );
};
