import React from "react"; 
import "./contactstyle.css"

 const ContactUs = () =>{
  const divStyles = {
    boxShadow: '1px 3px 5px #1C2833',
    margin: '2em',
    padding: '1em',
    background:'#797D7F',
    
    

};
  return (
  
    <div style={divStyles}className="container1">
      
      <form>
        <h1><center>----------CONTACT US----------</center></h1>
        <br /><br /><br />
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