import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  
  const [appointments, setAppointments] = useState([
    {Title: 'General checkup', Contact: '+0090877663', Date: '20-01-2023', Time: '14:35'}

  ]);
  const [contacts, setContacts] = useState([
    {Name: "Muhammad Usman", Phone: "+61433695747", Email: "muhammad.usman@qoria.com"}
  ]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  
  const addAppointment = (appointment) => {
    setAppointments((existing) => [{
      Title: appointment.title, 
      Contact: appointment.contact, 
      Date: appointment.date, 
      Time: appointment.time 
    }, ...existing]);
  }

  const addContact = (contact) => {
    setContacts((prev) => [contact, ...prev]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />}/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
