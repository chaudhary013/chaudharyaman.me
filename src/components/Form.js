import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
  <div className="forming">let's get connect
    <form>
      <label>Name:</label>                                                     
      <input type="text" />
      <label>Email:</label>                                                     
      <input type="email" />
      <label>Subject:</label>                                                     
      <input type="text" />
      <label>Message:</label> 
      <textarea  rows="6 placeholder="type ur msg/>                
      <button  className="btn">Submit</button>
    </form>
  </div>
  );
};

export default Form;
