import React from "react";
import "./FormStyle.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import db from "../firebase";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setsubject] = useState("");
  const [loader,setLoader] =useState(false);

  const handledInput = (e) => {
    e.preventDefault();
    setLoader(true);
    if(name !=="" && email!=="" && message !=="" && subject!=="") {
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        subjects :subject
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    }
    else {
        alert("Enter all the fields");
    }
    setName("");
    setEmail("");
    setMessage("");
    setsubject("")
    
  }
  return (
    <div className="Form" onSubmit={handledInput}>
      <form>
        <label>Your Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label>Subject</label>
        <input type="text" value={subject} onChange={(e)=>setsubject(e.target.value)}></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button className="Button-contact-page" style={{ background: loader ? "yellow" : " rgb(2, 2, 110)" }} type="submit">
          Submit
        </button>
        <ToastContainer
          position="top-right"
          autoClose={50000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
};

export default Form;
