import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// npm i @emailjs/browser

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fzd818l",
        "template_8x8eumf",
        form.current,
        "X6fNGBjWXNXAvccop"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      toast.success(`Thanks for connecting with me :), Regards from Ankit Chitrakar🚀`)
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="form">
      <label>Name</label>
      <input type="text" name="user_name" placeholder="Enter your name.." />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        placeholder="Enter your email-id.."
      />
      <label>Message</label>
      <textarea name="message" placeholder="Enter your queries here..." />
      <input type="submit" value="Send 🚀" />
    </form>
  );
};

export default Form;
