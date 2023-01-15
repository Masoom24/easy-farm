import React from "react"; 
import "./contactstyle.css"

 const ContactUs = () =>{
  return (
  
    <div className="container">
      
      <form>
        <h1><center>------------------------------CONTACT US--------------------------------</center></h1>
        <br /><br />
        <input type="text" id="firstName" placeholder="First Name" required />
        <input type="text" id="lastName" placeholder="Last Name" required />
        <input type="email" id="email" placeholder="Email" required /> 
        <input type="text" id="mobile" placeholder="mobile" required />
       
        <h4>Type Your Message Here....</h4>
        <textarea required></textarea>
        <input type="submit" value="Send" id="button"></input>
      </form>

    </div>
  );
}
export default ContactUs