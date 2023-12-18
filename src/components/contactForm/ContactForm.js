import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>

      <div className="col-md-4">
        <label htmlFor="name">Name: </label>
        <input id="name" onChange={(e)=> setName(e.target.value)} value={name} />
        </div>

        <div className="col-md-4">
        <label htmlFor="phone">Phone: </label>
        <input id="phone" onChange={(e)=> setPhone(e.target.value)} value={phone} />
        </div>

        <div className="col-md-4">
        <label htmlFor="email">Email: </label>
        <input id="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
        </div>

        <div className="col-md-8">
        <button type="submit" className="btn btn-primary">Add Contact</button>
        </div>
      </form>
    </>
  );
};

