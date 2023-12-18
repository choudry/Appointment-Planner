import React from "react";

export const ContactPicker = (props) => {
  const handleChange = ({target}) => {
    props.setContact(target.value)
  }

  return (
    <>
      <select onChange={handleChange}>
        <option value="">Please select</option>
        {
          props.contacts.map((element, index) => {
            return <option value={element.Name} key={index}>{element.Name}</option>
          })
        }
      </select>
    </>
  );
};
