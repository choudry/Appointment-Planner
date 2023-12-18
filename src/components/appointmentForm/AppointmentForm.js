import React, { useState } from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'
import 'bootstrap/dist/css/bootstrap.min.css';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleTitleChange = ({target}) => {
    setTitle(target.value);
    
  }
 

  return (
    <div>
    <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
      
    <div class="col-md-4">
      <label htmlFor="title" >Title: </label>
      <input id="title" value={title} placeholder="Title" 
      onChange={(e) => setTitle(e.target.value)} />
    </div>

    <div class="col-md-4">
      <label htmlFor="contact">Contacts: </label>
      {/* <input id="contact" value={contact} placeholder="Contact" 
      onChange={(e) => setContact(e.target.value)} /> */}
      <ContactPicker contacts={contacts} setContact={setContact} />
    </div>

    <div class="col-md-4">
      <label htmlFor="date">Date: </label>
      <input id="date" value={date} placeholder="Date" onChange={(e) => setDate(e.target.value)}/>
    </div>

    
    <div class="col-md-4">  <label htmlFor="time">Time: </label>
      <input id="time" value={time} placeholder="Time" onChange={(e) => setTime(e.target.value)}/>
    </div>

    <div class="col-12">
      <button type="submit" className="btn btn-primary">Book Appointment</button>
    </div>

    </form>
    </div>
  );
};
